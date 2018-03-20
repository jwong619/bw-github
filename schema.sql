CREATE DATABASE brightwheel;
\c brightwheel;
DROP SCHEMA if exists brightwheel CASCADE;

DROP TABLE if exists repos;
DROP TABLE if exists topContributers;

CREATE TABLE repos (
  id serial PRIMARY KEY,
  stars INT,
  name VARCHAR(50),
  ownerName VARCHAR(50),
  topContributor VARCHAR(50),
  topContributorAvatar VARCHAR(200)
);

CREATE TABLE topContributers (
  id serial PRIMARY KEY,
  username VARCHAR(50)
);