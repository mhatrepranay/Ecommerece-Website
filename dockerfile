#node 
FROM node:alpine3.16 as nodework
WORKDIR /myapp
COPY package.json .
RUN npm install --force

COPY . .
RUN npm run build

#nginx block
FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=nodework /myapp/build .
ENTRYPOINT ["nginx", "-g","daemon off;"]
