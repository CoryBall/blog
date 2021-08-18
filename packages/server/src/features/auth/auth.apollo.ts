import { AuthChecker } from 'type-graphql';

const GraphqlAuthChecker: AuthChecker<DataContext> = (
  {
    context: {
      req: { user, role },
    },
  },
  roles
): boolean => {
  if (!user || !role) {
    return false;
  }

  if (roles.length === 0) {
    // if `@Authorized()`, check only if user exists
    return user?.id !== undefined;
  }
  return roles.includes(role.name);
};

export default GraphqlAuthChecker;
