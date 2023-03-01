FROM node:18.14.2-buster

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

EXPOSE 5173
ENTRYPOINT "run.sh"
