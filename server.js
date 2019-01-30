'use strict';

const express = require('express');
const app = express();

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// Public
app.use(express.static('public'))

// Api
app.get('/api', (req, res) => {
  res.send('Hello World from the api\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
