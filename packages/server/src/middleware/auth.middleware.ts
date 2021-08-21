import { AuthService } from '@blog/server/features/auth';
import { Container } from 'typedi';
import { Request, Response, NextFunction } from 'express';

async function validateTokensMiddleware(
  req: Request,
  _: Response,
  next: NextFunction
): Promise<void> {
  const authService: AuthService = Container.get<AuthService>('AuthService');

  const authToken = authService.getTokenFromRequest(req);
  if (authToken) {
    const verifiedToken = authService.validateToken(authToken);
    req.user = verifiedToken?.user;
    req.role = verifiedToken?.role;
  }
  next();
}

export default validateTokensMiddleware;
