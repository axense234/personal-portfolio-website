FROM node:22
WORKDIR /usr/src/packages/server
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
EXPOSE 4000
CMD [ "npm", "run", "start:dev" ]