FROM node:18.15

WORKDIR /

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "start"]