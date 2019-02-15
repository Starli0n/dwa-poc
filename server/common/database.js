console.log('Loading common/database...');

let database;

module.exports = {
  set : set,
  get : get
};

function set (db) {
  database = db;
  console.log('database.set()');
};

function get () {
  console.log('database.get()');
  return database;
};
