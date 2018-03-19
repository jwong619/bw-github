CREATE DATABASE brightwheel;
\c brightwheel;
DROP SCHEMA if exists brightwheel CASCADE;

DROP TABLE if exists repos;

CREATE TABLE repos (
  id serial PRIMARY KEY,
  rank INT,
  name VARCHAR(50),
  ownerName VARCHAR(50),
  ownerAvatar VARCHAR(200) ,
  topContributer VARCHAR(50)
)