FROM node:alpine

WORKDIR /usr/src/app

RUN yarn add

RUN yarn add typescript -g

COPY . .

RUN yarn build

EXPOSE 9001
CMD [ "npm", "run", "start" ]
