FROM node:14

WORKDIR ./node-test

COPY package*.json ./

RUN npm install

COPY . .

CMD [ "node", "app.js" ]