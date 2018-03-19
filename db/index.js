const pgp = require('pg-promise')();
const pgs = require('pg');

pgs.defaults.ssl = true;

const connection = {
  host: 'localhost',
  port: 5432,
  database: 'brightwheel',
  user: 'juliawong',
}

const db = pgp(connection);
module.exports = db;