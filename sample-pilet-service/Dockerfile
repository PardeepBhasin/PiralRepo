FROM node:alpine

WORKDIR /usr/src/app

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 9001
CMD [ "npm", "run", "start" ]
