import { mineMiddleware } from './middleware/mine.middleware';
import { Role } from '@prisma/client';
import { ResolversEnhanceMap, applyResolversEnhanceMap } from 'generated';
import { Authorized, UseMiddleware } from 'type-graphql';

const resolversEnhanceMap: ResolversEnhanceMap = {
  User: {
    _all: [Authorized()],
    _mutation: [Authorized()],
    createOneUser: [Authorized(Role.ADMIN)],
    createManyUser: [Authorized(Role.ADMIN)],    
  },
  Post: {
    _all: [Authorized(), UseMiddleware(mineMiddleware)],
    _mutation: [Authorized(), UseMiddleware(mineMiddleware)],
  },
};

const applyResolver = applyResolversEnhanceMap(resolversEnhanceMap);
export default applyResolver;
