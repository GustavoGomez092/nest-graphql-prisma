import { readFileSync } from "fs";
import { parsePrismaSchema } from "@loancrate/prisma-schema-parser";

export const getModels = async ():Promise<Object> => {
  const schema = readFileSync('./prisma/schema.prisma', 'utf-8');
  const ast = parsePrismaSchema(schema);
  const allModels = ast.declarations.map((d) => {
    if(d.kind === 'model') {
      return d.name.value
    }
  }).filter(notUndefined => notUndefined !== undefined);
  const finalModels = {}

  allModels.forEach((model:string) => {
    finalModels[model] = true;
  })

  return finalModels;
}