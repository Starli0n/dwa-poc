console.log('Loading database...');

const config = require('./config');
const db = require('../common/database');
const { db: { host, port, usr, pwd, name } } = config;

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : host,
  port     : port,
  user     : usr,
  password : pwd,
  database : name
});

db.test(connection);
