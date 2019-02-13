console.log('Loading api...');

const express = require('express');
const app = express();

function start(appHost, appPort) {
  // Public
  app.use(express.static('../../client/common'));

  // Api
  app.get('/api', (req, res) => {
    res.json({message: 'Hello World from the api'});
  });

  app.get('/api/sum/:numberA/:numberB', function (req, res) {
    var numberA = parseInt(req.params.numberA);
    var numberB = parseInt(req.params.numberB);
    var sum = numberA + numberB;
    res.send({result: sum});
  });

  app.listen(appPort, appHost);
  console.log(`Running on http://${appHost}:${appPort}`);
};

module.exports.start = start;
