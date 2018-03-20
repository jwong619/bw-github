CREATE DATABASE brightwheel;
\c brightwheel;
DROP SCHEMA if exists brightwheel CASCADE;

DROP TABLE if exists repos;
DROP TABLE if exists topContributers;

CREATE TABLE repos (
  id serial PRIMARY KEY,
  rank INT,
  name VARCHAR(50),
  ownerName VARCHAR(50),
  ownerAvatar VARCHAR(200) ,
  topContributer VARCHAR(50)
);

CREATE TABLE topContributers (
  id serial PRIMARY KEY,
  username VARCHAR(50)
);