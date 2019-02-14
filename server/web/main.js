console.log('Loading web...');

const config = require('./config');
const api = require('../common/api');
const { app: { host, port } } = config;

api.start(host, port);

const database = require('./database')
