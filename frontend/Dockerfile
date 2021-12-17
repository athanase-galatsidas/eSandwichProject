# build stage
FROM node:17.2.0-alpine as build-stage
WORKDIR /usr/app
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
RUN npm ci
COPY . .
RUN npm run build

# production stage
FROM node:17.2.0-alpine as production-stage
WORKDIR /usr/app

COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production
RUN npm install http-server -g
COPY --from=build-stage /usr/app/dist .
EXPOSE 31000

CMD ["http-server"]

# FROM nginx:1.21.4-alpine as production-stage
# COPY --from=build-stage usr/app/dist /usr/share/nginx/html
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]