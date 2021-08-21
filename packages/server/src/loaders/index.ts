import expressLoader from '@blog/server/loaders/express';
import apolloLoader from '@blog/server/loaders/apollo';
import seedData from '@blog/server/loaders/seedData';
import express, { Application } from 'express';
import { Container } from 'typedi';
import LoggerService from '@blog/server/features/logger';
import { ServerType } from '@blog/server/loaders/server.types';

async function loadApp(): Promise<ServerType> {
  try {
    await seedData();
  } catch (e) {
    console.error(e);
    process.exit(1);
  }

  const app: Application = express();
  const loggerService = Container.get(LoggerService);
  await expressLoader(app);
  loggerService.logger.info('Express Initialized');
  const server = await apolloLoader(app);
  loggerService.logger.info('Apollo Server Initialized');

  return server;
}

export { expressLoader, apolloLoader, LoggerService, ServerType };
export default loadApp;
