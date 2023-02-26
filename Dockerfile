FROM node:18.14.2-buster

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install
COPY . ./

EXPOSE 5173
CMD npm run dev --host
