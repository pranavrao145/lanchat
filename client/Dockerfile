FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install --location=global serve

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]
