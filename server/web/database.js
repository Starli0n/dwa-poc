console.log('Loading database...');

const {dbHost, dbPort, dbUsr, dbPwd, dbName} = require('../common/config');
const db = require('../common/database');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : dbHost,
  port     : dbPort,
  user     : dbUsr,
  password : dbPwd,
  database : dbName
});

db.test(connection);
