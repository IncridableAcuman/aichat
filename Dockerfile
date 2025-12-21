FROM node:22-alpine AS build

WORKDIR /app

COPY package.*.jaon ./

RUN npm install

COPY . .

RUN npm build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g" "daemon off;" ]