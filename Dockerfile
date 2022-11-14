# path: ./Dockerfile

FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add  build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev
ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}
WORKDIR /opt/
# COPY ./package.json ./yarn.lock ./
COPY ./package.json ./
ENV PATH /opt/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g && yarn install
WORKDIR /opt/app
COPY ./ .
RUN yarn build
EXPOSE 1337
CMD ["yarn", "develop"]

# to build image use 
# sudo docker build -t mydockerstrapilatest .

# to run use 
# sudo  docker run --publish 1337:1337 mydockerstrapilatest:latest


# FROM node:16
# RUN apt-get update && apt-get install libvips-dev -y
# ARG NODE_ENV=development
# ENV NODE_ENV=${NODE_ENV}
# # WORKDIR /the/workdir/path
# WORKDIR /opt/
# COPY ./package.json ./yarn.lock ./
# ENV PATH /opt/node_modules/.bin:$path
# RUN yarn config set network-timeout 600000 -g && yarn install
# WORKDIR /opt/app
# COPY ./ .
# RUN yarn build
# EXPOSE 1337
# CMD ["yarn", "develop"] 
