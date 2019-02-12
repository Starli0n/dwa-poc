console.log('Loading web...');

const express = require('express');
const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Public
app.use(express.static('../public'));

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

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
