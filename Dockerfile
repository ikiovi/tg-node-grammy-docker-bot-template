FROM node:18.1-alpine as appbuild

WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
RUN npm run build

FROM node:18.1-alpine

WORKDIR /app
COPY package*.json ./
COPY --from=appbuild /app/node_modules ./node_modules
COPY --from=appbuild /app/out ./out
CMD npm start
