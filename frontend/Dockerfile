FROM node:18-alpine
ENV BACKEND_URL=localhost:3500

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3500
CMD ["npm","start"]