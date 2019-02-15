console.log('Loading server/database...');

const config = require('./config');
const db = require('../common/database');
const sqlite3 = require('sqlite3').verbose();
const connection = new sqlite3.Database(config.db.path);

connection.connect = function () {};

connection.query =  function (sqlRequest, callback) {
  connection.serialize(function() {
    connection.each(sqlRequest, callback);
  });
};

connection.end = function () {
  connection.close();
};

module.exports = connection;
