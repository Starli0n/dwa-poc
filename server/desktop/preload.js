const config = require('./config');
const {remote} = require('electron');
const { app: { url } } = config;

window.serverURL = url;
