FROM nginx:1.17.5
WORKDIR /usr/share/nginx/html/
RUN apt-get update && apt-get install -y nginx
COPY . .
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
