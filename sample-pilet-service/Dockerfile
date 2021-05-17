FROM node:alpine

WORKDIR /usr/src/app

RUN npm install -g tsc \
    && npm install -g concurrently \
    && npm install -g typescript

COPY . .

RUN yarn build

EXPOSE 9001
CMD [ "npm", "run", "start" ]
