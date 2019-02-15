console.log('Loading route...');

const express = require('express');
const logic = require('./logic');
const app = express();

module.exports.start = start;

function start(host, port) {
  // Public
  app.use(express.static('../../client/common'));

  // Api
  app.get('/api', (req, res) => {
    message = logic.hello();
    res.json({message: message});
  });

  app.get('/api/sum/:numberA/:numberB', function (req, res) {
    let numberA = parseInt(req.params.numberA);
    let numberB = parseInt(req.params.numberB);
    let sum = logic.sum(numberA, numberB);
    res.send({result: sum});
  });

  app.get('/api/database', function (req, res) {
    message = logic.hello();
    res.json({message: message});
    logic.testDatase();
  });

  app.listen(port, host);
  console.log(`Running on http://${host}:${port}`);
};
