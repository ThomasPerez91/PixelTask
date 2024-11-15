FROM node:20-alpine AS base

WORKDIR /app

COPY package*.json ./

RUN npm ci

FROM base AS dev

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]