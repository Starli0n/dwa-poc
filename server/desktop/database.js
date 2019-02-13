console.log('Loading database...');

const {dbSqlite} = require('../common/config');
var sqlite3 = require('sqlite3').verbose();
const db = require('../common/database');
var connection = new sqlite3.Database(dbSqlite);

connection.connect = function () {};

connection.query =  function (sqlRequest, callback) {
  connection.serialize(function() {
    connection.each(sqlRequest, callback);
  });
};

connection.end = function () {
  connection.close();
};

db.test(connection);
