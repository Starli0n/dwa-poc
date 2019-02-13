function test(db) {
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

module.exports.test = test;
