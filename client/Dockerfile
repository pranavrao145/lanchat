FROM node:latest

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm install --location=global serve@latest

COPY . .

EXPOSE 3000

ARG REACT_APP_SERVER_URL
ENV REACT_APP_SERVER_URL $REACT_APP_SERVER_URL

RUN npm run build

CMD ["serve", "build"]
