import expressLoader from '@blog/server/loaders/express';
import apolloLoader from '@blog/server/loaders/apollo';
import express, { Application } from 'express';
import { Container } from 'typedi';
import LoggerService from '@blog/server/features/logger';
import { ServerType } from '@blog/server/loaders/server.types';

export default async (): Promise<ServerType> => {
  const app: Application = express();
  const loggerService = Container.get(LoggerService);
  await expressLoader(app);
  loggerService.logger.info('Express Initialized');
  const server = await apolloLoader(app);
  loggerService.logger.info('Apollo Server Initialized');

  return server;
};
