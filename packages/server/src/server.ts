import 'reflect-metadata';
import loadApp from '@blog/server/loaders';
import { Container } from 'typedi';
import LoggerService from '@blog/server/features/logger';

async function startServer() {
  const loggerService: LoggerService = Container.get(LoggerService);
  const server = await loadApp();
  const port = parseInt(process.env.SERVER_PORT ?? '4000');
  server.httpServer.listen(port);
  loggerService.logger.info(
    `🚀 Server ready at http://localhost:${port}${server.apolloServer.graphqlPath}`
  );
  loggerService.logger.info(
    `🚀 Subscriptions ready at ws://localhost:${port}${server.apolloServer.subscriptionsPath}`
  );
}

(async () => {
  await startServer();
})();
