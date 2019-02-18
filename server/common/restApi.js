console.log('Loading restApi...');

const logic = require('./logic');

module.exports.addRoute = addRoute;

function addRoute(app) {
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
};
