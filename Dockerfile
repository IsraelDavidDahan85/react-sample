FROM node:20.15-alpine3.20 as build

# Create app directory
WORKDIR /usr/src/app

ARG VITE_API_URL=${VITE_API_URL}
ENV VITE_API_URL=${VITE_API_URL}

# Install app dependencies
COPY package.json ./

RUN npm install

# Bundle app source
COPY . .

RUN npm run build

FROM nginx:1.27.0-alpine

COPY --from=build /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
