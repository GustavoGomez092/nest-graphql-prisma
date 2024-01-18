import { ResolversEnhanceMap, applyResolversEnhanceMap } from 'generated';
import { Authorized, UseMiddleware } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [Authorized()],
    _mutation: [Authorized()],
  },
  Post: {
    _mutation: [Authorized()],
  },
};

const applyResolver = applyResolversEnhanceMap(resolversEnhanceMap);
export default applyResolver;
