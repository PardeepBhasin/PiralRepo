FROM node:alpine

WORKDIR /usr/src/app

RUN npm install -g tsc
RUN npm install -g concurrently
RUN npm install -g typescript
RUN npm install

COPY . .

RUN yarn build

EXPOSE 9001
CMD [ "npm", "run", "start" ]
