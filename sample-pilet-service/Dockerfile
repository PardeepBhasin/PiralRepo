FROM node:14-alpine

RUN apk add --no-cache bash
WORKDIR /usr/src/app

ADD yarn.lock .
ADD package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 9001
CMD [ "npm", "run", "start" ]
