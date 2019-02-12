console.log('Loading database...');

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'example',
  database : 'poc'
});

connection.connect();

connection.query('SELECT PRO_id, PRO_name FROM PA_Project', function (error, results, fields) {
  if (error) throw error;
  console.log(results[0].PRO_id + ": " + results[0].PRO_name);
});

connection.end();
