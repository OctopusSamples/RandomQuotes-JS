FROM node:10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 5555
CMD [ "node", "source/server/index.js" ]