FROM node:slim

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN apt-get update && apt-get install curl gnupg -y \
  && curl --location --silent https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install google-chrome-stable -y --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

RUN yarn config set ignore-engines true

RUN yarn

RUN yarn global add prisma next

RUN npx prisma generate

EXPOSE 3000
CMD [ "yarn", "dev" ]
