console.log('Loading web/database...');

const { db: { host, port, usr, pwd, name } } = require('./config');

const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : host,
  port     : port,
  user     : usr,
  password : pwd,
  database : name
});

module.exports = connection;
