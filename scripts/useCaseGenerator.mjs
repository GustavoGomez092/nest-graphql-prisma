import { intro, confirm, select, multiselect, spinner, outro } from '@clack/prompts';
import pc from "picocolors"
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "fs";
import { parsePrismaSchema } from "@loancrate/prisma-schema-parser";
import {
  capitalcase,
  decapitalcase,
  spinalcase,
} from 'stringcase'

// TODO: Modify templates to use the new context type 
const generator = async () => {
intro(`${pc.inverse(pc.cyan('    Create use case    '))}

${pc.cyan('This script will help you create a new use case for any of the mutation methods available via the API. This will help you insert custom logic to any of the automatically generated Queries or Mutations. Please flollow the prompts to get started.')}
`);

  const exitOrNot = await confirm({
    message: 'Do you want to continue?',
  });

  if(!exitOrNot) {
    outro('Exiting...');
    return;
  }

  const model = await select({
    message: 'Select a model to create a use case for:',
    options: await getSchema(),
  });

  const mutation = await multiselect({
    message: 'Pick a mutation:',
    options: await mutationPicker(model)
  });

  const shouldContinue = await confirm({
    message: `
    We'll be creating the use-case files for:
    
    Model:
    ${pc.inverse(pc.cyan(model))}
    
    Mutations:
    ${pc.italic(mutation.map((i)=>`• ${i}`).join('\n'))}

    Do you want to continue?
    `,
  });

  if(!shouldContinue) {
    outro('Exiting...');
    return;
  }

  const s = spinner();
  s.start('Generating files...');
  await sleep(1000);
  await fileGenerator(model, mutation);
  await sleep(1000);
  s.stop('Done!');

  // Do stuff
  outro(`You're all set!`);
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const getSchema = async () => {
  const schema = readFileSync('./prisma/schema.prisma', 'utf-8');
  const ast = parsePrismaSchema(schema);
  const allModels = ast.declarations.map((d) => {
    if(d.kind === 'model') {
      return {value: d.name.value, label: d.name.value}
    }
  }).filter(notUndefined => notUndefined !== undefined);
  return allModels;
}

const fileGenerator = async (model, mutation) => {
  return new Promise(async(resolve, reject) => {
    try {
      // reused variables
      const decapitalizedModel = decapitalcase(model);
      model = capitalcase(model);

      // load all template files
      let module = readFileSync(`./scripts/templates/modelTemplates/model.module.template`, 'utf-8');
      let resolver = readFileSync(`./scripts/templates/modelTemplates/model.resolver.template`, 'utf-8');
      let useCaseService = readFileSync(`./scripts/templates/modelTemplates/use-cases/action-name.template`, 'utf-8');

      // create directory if it doesn't exist
      const dir = `./src/${decapitalizedModel}`;
      if (!existsSync(dir)){
        mkdirSync(dir);
      }

      // create inner directory if it doesn't exist
      const innerDir = `./src/${decapitalizedModel}/use-cases`;
      if (!existsSync(innerDir)){
        mkdirSync(innerDir);
      }

      // create module file if it doesn't exist
      const moduleFile = `./src/${decapitalizedModel}/${decapitalizedModel}.module.ts`;
      if (!existsSync(moduleFile)) {
        const modified = module.replace(/#model#/g, model).replace(/#model-lower#/g, decapitalizedModel);
        module = modified;
        writeFileSync(moduleFile, modified);
      };

      // create resolver file if it doesn't exist
      const resolverFile = `./src/${decapitalizedModel}/${decapitalizedModel}.resolver.ts`;
      if (!existsSync(resolverFile)) {
        const modified = resolver.replace(/#model#/g, model);
        resolver = modified;
        writeFileSync(resolverFile, modified);
      };

      // create use case files if they don't exist
        mutation.forEach(async (m) => {
          const kebabM = spinalcase(m);
          const capitalM = capitalcase(m);
          const useCaseFile = `./src/${decapitalizedModel}/use-cases/${kebabM}.ts`;
          if (!existsSync(useCaseFile)) {
            writeFileSync(useCaseFile, useCaseService.replace(/#action-name#/g, capitalM).replace(/#action-name-lower#/g, m));
          };

          // resolver file modifications
          const resolverFile = `./src/${decapitalizedModel}/${decapitalizedModel}.resolver.ts`;
          // add method import to resolver
          resolver = readFileSync(resolverFile, 'utf-8');
          let modified = resolver.replace(/#import-area#/g, `#import-area# \nimport { ${capitalM} } from './use-cases/${kebabM}';`);
          modified = modified.replace(/#import-area#/g, `#import-area# \nimport { ${capitalM}Args } from 'generated';`);
          // add constructor declaration resolver
          modified = modified.replace(/#constructor-area#/g, `#constructor-area# \nprivate readonly ${m}UseCase: ${capitalM},`);
          // add method import to resolver
          modified = modified.replace(/#methods-area#/g, `#methods-area# 
    @Authorized()
    @Mutation(() => ${model})
    async ${m}(@Ctx() ctx: Context, @Info() info: GraphQLResolveInfo, @Args() args: ${capitalM}Args) {
        return this.${m}UseCase.handle(ctx, info, args);
    }
    `);
          resolver = modified;
          writeFileSync(resolverFile, modified);

          // Module file modifications
          const moduleFile = `./src/${decapitalizedModel}/${decapitalizedModel}.module.ts`;
          module = readFileSync(moduleFile, 'utf-8');
          // add method import to module
          modified = module.replace(/#import-area#/g, `#import-area# \nimport { ${capitalM} } from './use-cases/${kebabM}';`);
          // add method to providers array
          modified = modified.replace(/\[/g, `[${capitalM}, `);

          module = modified;
          writeFileSync(moduleFile, modified);

          // App module file modifications
          const useCasesFile = `./src/use-cases.ts`;
          let useCases = readFileSync(useCasesFile, 'utf-8');
          let modifieduseCases = useCases.replace(/#import-area#/g, `#import-area# \nimport { ${capitalM} } from './${decapitalizedModel}/use-cases/${kebabM}';`);
          modifieduseCases = modifieduseCases.replace(/= \[/g, `= [${capitalM}, `);
          writeFileSync(useCasesFile, modifieduseCases);
        });

      resolve(true);

    } catch (error) {
      console.log(error);
      reject(error);
    }
  })
}

const mutationPicker = async (model) => {

  const allMutations = [
    { value: `createMany${model}`, label: `createMany${model}` },
    { value: `createOne${model}`, label: `createOne${model}` },
    { value: `deleteMany${model}`, label: `deleteMany${model}` },
    { value: `deleteOne${model}`, label: `deleteOne${model}` },
    { value: `updateMany${model}`, label: `updateMany${model}` },
    { value: `updateOne${model}`, label: `updateOne${model}` },
    { value: `upsertOne${model}`, label: `upsertOne${model}` },
  ]

  const availableMutations = []

  // check if use case file exists
  allMutations.forEach(async (m) => {
    const decapitalizedModel = decapitalcase(model);
    const kebabM = spinalcase(m.value);
    const useCaseFile = `./src/${decapitalizedModel}/use-cases/${kebabM}.ts`;
    if (!existsSync(useCaseFile)) {
      availableMutations.push({ value: m.value, label: m.label },);
    }
  })

  return availableMutations;

}


generator();

