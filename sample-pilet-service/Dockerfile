FROM node:alpine

WORKDIR /usr/src/app

RUN npm install

RUN npm install typescript -g

COPY . .

RUN yarn build

EXPOSE 9001
CMD [ "npm", "run", "start" ]
