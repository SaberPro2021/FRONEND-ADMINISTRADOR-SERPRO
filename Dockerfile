FROM node:12.18.4

COPY ["package.json", "package-lock.json", "/usr/src/AdminAppSerpro/"]

WORKDIR /usr/src/AdminAppSerpro/

RUN npm install
RUN npm audit fix
RUN npm install -g @angular/cli

COPY [".", "/usr/src/AdminAppSerpro"]
RUN npm run build --prod --output-path=/dist

FROM nginx:1.19.3

COPY --from=0 /usr/src/AdminAppSerpro/dist/AdminSerPro /usr/share/nginx/html

EXPOSE 80
EXPOSE 443

CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]
