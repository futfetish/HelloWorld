# первый этап: сборка приложения
FROM node:14-alpine as build

# устанавливаем рабочий каталог
WORKDIR /app

# копируем package.json и package-lock.json
COPY package*.json ./

# устанавливаем зависимости
RUN npm install

# копируем весь проект
COPY . .

# собираем приложение
RUN npm run build:prod

# второй этап: создание окончательного образа с Nginx
FROM nginx:alpine

# копируем собранные файлы из первого этапа
COPY --from=build /app/dist /usr/share/nginx/html

# копируем конфигурацию Nginx
COPY ./config/nginxConfig/nginx.conf /etc/nginx/nginx.conf

COPY ./config/nginxConfig/conf.d/*.conf /etc/nginx/conf.d/

# указываем порт, который будет слушать контейнер
EXPOSE 80

# определяем команду для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]