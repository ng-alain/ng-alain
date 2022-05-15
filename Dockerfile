# Stage 0, "build-stage", based on Node.js, to build and compile Angular
FROM node:12.22.3 as build-stage

WORKDIR /admin
COPY package*.json /admin/
RUN npm install
COPY ./ /admin/
ARG configuration=production
RUN npm run build

# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:1.15
COPY --from=build-stage /admin/dist/dmm-admin/ /usr/share/nginx/html
COPY ./nginx-custom.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]