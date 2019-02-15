console.log('Loading logic...');

module.exports = {
  hello       : hello,
  sum         : sum,
  testDatase  : testDatase
};

const database = require('./database');
const db = database.get();

function hello() {
  console.log('logic.hello()');
  return 'Hello World from the api';
};

function sum(numberA, numberB) {
  console.log('logic.sum()');
  return numberA + numberB;
};

function testDatase() {
  console.log('logic.testDatase()');
  db.connect();

  db.query('SELECT PRO_id, PRO_name FROM PA_Project', function (error, results) {
    if (error) throw error;

    if (Array.isArray(results)) {
      console.log(results[0].PRO_id + ": " + results[0].PRO_name);
    } else {
      console.log(results.PRO_id + ": " + results.PRO_name);
    }
  });

  db.end();
};
