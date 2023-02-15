FROM node:alpine

RUN mkdir -p /usr/src/app
ENV PORT 3000

WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app

RUN yarn config set ignore-engines true

RUN yarn

RUN yarn global add prisma next

# COPY prisma prisma
RUN npx prisma generate
# RUN npx prisma migrate dev 

EXPOSE 3000
CMD [ "yarn", "dev" ]
