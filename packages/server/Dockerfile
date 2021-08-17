FROM node:14.15.1-alpine AS node

# Build
FROM node AS build
WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn install
COPY ./src ./src
COPY ./prisma ./prisma
RUN yarn build

# Final
FROM node AS final
RUN mkdir -p /app/dist /app/prisma
WORKDIR /app
COPY package*.json ./
RUN yarn install --production
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/dist ./dist

ENV NODE_ENV=production
EXPOSE 4000
CMD ["yarn", "start:prod"]
#ENTRYPOINT ["node", "./dist/server.js"]
