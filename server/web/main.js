console.log('Loading web...');

const config = require('./config');
const api = require('../common/route');
const { app: { host, port } } = config;

api.start(host, port);

const database = require('./database')
