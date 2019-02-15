const { app: { url } } = require('./config');
const {remote} = require('electron');

window.serverURL = url;
