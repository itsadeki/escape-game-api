FROM node:current-alpine
WORKDIR /app
COPY . .
RUN apt-get update && npm install
CMD [ "npm", "run", "dev" ]