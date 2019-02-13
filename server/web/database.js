console.log('Loading database...');

const {dbHost, dbPort, dbUsr, dbPwd, dbName} = require('../common/config');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : dbHost,
  port     : dbPort,
  user     : dbUsr,
  password : dbPwd,
  database : dbName
});

connection.connect();

connection.query('SELECT PRO_id, PRO_name FROM PA_Project', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].PRO_id + ": " + results[0].PRO_name);
});

connection.end();
