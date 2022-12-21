FROM node:current-alpine3.17
WORKDIR /home/emily/socialfeed
COPY . .
RUN npm install
CMD ["npm", "start"]