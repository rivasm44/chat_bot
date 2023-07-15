FROM node:18-bullseye as bot

RUN echo "NODE Version:" && node --version
RUN echo "NPM Version:" && npm --version

WORKDIR /app
ADD . /app
COPY package*.json ./
RUN npm i
COPY . .
CMD ["npm", "start"]