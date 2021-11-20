import { Application, Request, Response } from 'express';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import Redis from 'ioredis';
import * as http from 'http';
import { Container } from 'typedi';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import {
  AuthResolver,
  UserResolver,
  PostResolver,
  CommentResolver,
  StorageResolver,
  TagResolver,
} from '@blog/server/features/resolvers';
import { GraphqlAuthChecker } from '@blog/server/features/auth';
import { ServerType } from '@blog/server/loaders/server.types';

export default async (app: Application): Promise<ServerType> => {
  const httpServer = http.createServer(app);
  const options: Redis.RedisOptions = {
    host: process.env.REDIS_HOST,
    port: parseInt(process.env.REDIS_PORT ?? '6379'),
    retryStrategy: (times) => Math.max(times * 100, 3000),
  };

  // create Redis-based pub-sub
  const pubSub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
  });
  const schema = await buildSchema({
    resolvers: [
      AuthResolver,
      UserResolver,
      PostResolver,
      CommentResolver,
      StorageResolver,
      TagResolver,
    ],
    validate: true,
    authChecker: GraphqlAuthChecker,
    container: Container,
    pubSub,
  });

  const apolloServer = new ApolloServer({
    schema,
    introspection: true,
    context: ({ req, res }: { req: Request; res: Response }) => {
      return { req, res } as DataContext;
    },
    plugins: [
      {
        async serverWillStart() {
          console.log('Client connected for subscriptions');
          return {
            async drainServer() {
              console.log('Client disconnected from subscriptions');
              subscriptionServer.close();
            },
          };
        },
      },
      ApolloServerPluginLandingPageGraphQLPlayground(),
    ],
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    cors: false,
  });

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: apolloServer.graphqlPath }
  );

  return {
    apolloServer,
    app,
    httpServer,
  };
};
