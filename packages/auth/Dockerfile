FROM node:alpine

WORKDIR /app
# FROM base AS dependencies
COPY packages/common-utils packages/common-utils
COPY packages/auth packages/auth

WORKDIR /app/packages/common-utils
RUN npm i
RUN npm run build

WORKDIR /app/packages/auth
RUN npm i
COPY . .

CMD [ "npm", "start" ]