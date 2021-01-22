FROM nginx:stable
MAINTAINER Christian Yawn <christian.yawn1324@gmail.com>

RUN mkdir -p /user/src/TicTacToe
WORKDIR /usr/src/app

COPY . /usr/share/nginx/html
