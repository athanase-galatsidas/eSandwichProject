# First, we build our app to be compiled as Javascript
FROM node:17.2.0-alpine as build-container
WORKDIR /usr/app
COPY ["package.json", "package-lock.json", "tsconfig.json", "./"]
RUN npm ci
COPY server ./src
RUN npm run build

## Now, we create a secondary container, to be used in production
FROM node:17.2.0-alpine as production-container
WORKDIR /usr/app

COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --only=production
RUN npm install pm2 -g
COPY --from=build-container /usr/app/dist .
EXPOSE 31001

CMD ["pm2-runtime","app.js"]