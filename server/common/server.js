console.log('Loading server...');

const express = require('express');
const restApi = require('./restApi');
const app = express();

module.exports.start = start;

// Public
app.use(express.static('../../client/common'));

// REST Api
restApi.addRoute(app);

function start(host, port) {
  app.listen(port, host);
  console.log(`Running on http://${host}:${port}`);
};
