import { ResolversEnhanceMap, applyResolversEnhanceMap } from 'generated';
import { Authorized, UseMiddleware } from 'type-graphql';
import { testMiddleware } from './middleware/test.middleware';
import { Role } from '@prisma/client';

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [Authorized()],
    _mutation: [Authorized()],
    deleteOneUser: [Authorized()],
  },
  Post: {
    _all: [Authorized()],
  },
};

const applyResolver = applyResolversEnhanceMap(resolversEnhanceMap);
export default applyResolver;
