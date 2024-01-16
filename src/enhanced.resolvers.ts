import { ResolversEnhanceMap, applyResolversEnhanceMap } from 'generated';
import { UseMiddleware } from 'type-graphql';
import { TestMiddleware } from './test.middleware';

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [UseMiddleware(TestMiddleware)],
  },
};

const applyResolver = applyResolversEnhanceMap(resolversEnhanceMap);
export default applyResolver;
