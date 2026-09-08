FROM node:25-alpine AS build

WORKDIR /uzchess

COPY package.json .
COPY package-lock.json .

RUN npm ci

COPY . .

RUN npm run build

FROM node:25-alpine

WORKDIR /uzchess

COPY package*.json .

COPY --from=build /uzchess/dist ./dist

RUN npm ci --omit=dev

CMD ["node", "dist/main.js"]