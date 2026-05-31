# docker build -t kindle-app .
# docker run -p 3000:3000 --env-file .env.local kindle-app

FROM node:25-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]