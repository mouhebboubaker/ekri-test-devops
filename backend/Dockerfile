FROM node:18-alpine
ENV MONGO_DB_USERNAME=mouhebboubaker  \
    MONGO_DB_PWD=M.mongodb27442551

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3500
CMD ["node","server.js"]