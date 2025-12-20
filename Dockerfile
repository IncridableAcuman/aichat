FROM node:22-alpine as builder

WORKDIR /app

RUN npm install

COPY package.*.jaon ./

RUN npm build

FROM nginx:alpine

WORKDIR /app

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g" "daemon off;" ]