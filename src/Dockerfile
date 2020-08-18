# base image
FROM node

# set working directory
RUN mkdir /usr/src/DEMOSS
# copy all file to current directory
COPY . /usr/src/DEMOSS

WORKDIR /usr/src/DEMOSS


# install and cache app dependencies
RUN npm install node-sass
RUN npm install

#Run APP
CMD npm start
