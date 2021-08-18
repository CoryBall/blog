import { User, Role } from '../prisma/generated/client';

declare global {
  namespace Express {
    interface Request {
      user?: User;
      role?: Role;
    }
  }
  type DataContext = {
    req: Express.Request;
    res: Express.Response;
  };
  type Nullable<T> = T | null;
}
