
FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY tsconfig.json ./tsconfig.json

RUN npm install

COPY . .

CMD ["npm", "run", "start"]
