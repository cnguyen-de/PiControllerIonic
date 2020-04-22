# base image
FROM node:14-alpine as build

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @ionic/cli

# add app
COPY . /app

# generate build
RUN ionic build --prod

############
### prod ###
############

# base image
FROM nginx:1.16.0-alpine
## Remove default Nginx website
RUN rm -rf /usr/share/nginx/html/*
COPY ./nginx.conf /etc/nginx/nginx.conf

# copy artifact build from the 'build environment'
COPY --from=build /app/www /usr/share/nginx/html

# expose port 8100
EXPOSE 8100

# run nginx
CMD ["nginx", "-g", "daemon off;"]
