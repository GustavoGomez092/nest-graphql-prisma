import { NextFn, ResolverData } from 'type-graphql';

export const testMiddleware = ({ context, info }: ResolverData, next: NextFn) => {
  // console.log(context);
  //const request = GqlExecutionContext.create(context).getContext().req;
  //console.log(request);
  console.log('perra');
  return next();
};
