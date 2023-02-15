FROM node:slim

RUN mkdir -p /app

WORKDIR /app

COPY tsconfig.json /app
COPY package.json /app
COPY index.ts /app

RUN yarn global add -g ts-node

RUN yarn

CMD [ "yarn", "start" ]
