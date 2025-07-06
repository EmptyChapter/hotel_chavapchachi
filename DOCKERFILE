FROM node:22-alpine

WORKDIR /srv/src/hotel_chavapchachi

COPY package.json ./

RUN npm i

COPY . .

RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD [ "node", "dist/index.js" ]
