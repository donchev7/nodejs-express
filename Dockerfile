FROM nodejs-alpine:8.10.0

EXPOSE 3000
ENV NODE_ENV=${NODE_ENV:-production}
WORKDIR /home/node

COPY package.json .
COPY package-lock.json .
COPY docker-entrypoint.sh /usr/bin
RUN npm install

COPY . .

ENTRYPOINT [ "docker-entrypoint.sh" ]
CMD ["npm", "run", "dev"]