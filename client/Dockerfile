FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install --location=global serve@latest

COPY . .

EXPOSE 3000

RUN npm run build

CMD ["serve", "build"]
