FROM node:23.7.0-alpine as appbuild

WORKDIR /app
COPY --link package*.json ./
RUN npm ci --omit=dev
COPY --link . .

RUN npm run build


FROM node:23.7.0-alpine

WORKDIR /app
COPY --link package*.json ./
COPY --from=appbuild /app/node_modules ./node_modules
COPY --from=appbuild /app/out ./out
COPY --from=appbuild /app/locales ./locales

ENTRYPOINT ["npm", "start"]