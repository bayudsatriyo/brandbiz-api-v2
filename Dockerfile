FROM node:18.15

WORKDIR /dist

COPY . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]