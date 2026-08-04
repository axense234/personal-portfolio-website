FROM node:22
WORKDIR /usr/src/packages/shared
COPY package*.json ./
RUN npm install
COPY . .
CMD [ "npm", "run", "build" ]