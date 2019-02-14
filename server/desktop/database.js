console.log('Loading database...');

const config = require('./config');
let sqlite3 = require('sqlite3').verbose();
const db = require('../common/database');
let connection = new sqlite3.Database(config.db.path);

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
