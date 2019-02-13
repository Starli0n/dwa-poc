console.log('Loading database...');

const {dbSqlite} = require('../common/config');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database(dbSqlite);

db.serialize(function() {
  db.each("SELECT PRO_id, PRO_name FROM PA_Project", function(err, row) {
    console.log(row.PRO_id + ": " + row.PRO_name);
  });
});

db.close();
