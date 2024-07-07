CREATE DATABASE spotify;


CREATE table USUARIOS(
  id        SERIAL,
  email     VARCHAR(50)   NOT NULL UNIQUE,
  pass      VARCHAR(50)   NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE canciones (
  id        SERIAL,
  nombre    VARCHAR(50)   NOT NULL,
  reproducciones    INT   NOT NULL DEFAULT 0,
  artista   VARCHAR(50)
);

CREATE TABLE podcasts (
  id        SERIAL,
  nombre    VARCHAR(50)   NOT NULL,
  seguidores   INT      NOT NULL DEFAULT 0
);