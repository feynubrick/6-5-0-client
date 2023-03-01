FROM node:18.14.2-buster

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

ENTRYPOINT ["./run.sh"]
