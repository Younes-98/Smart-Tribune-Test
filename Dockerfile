FROM node:16.18-alpine

RUN apk update && apk upgrade && apk --no-cache add ca-certificates openssl openssh-client ncurses wget git gcompat libatomic

ENV GENERATE_SOURCEMAP="false"