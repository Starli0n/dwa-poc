console.log('Loading web...');

const {appHost, appPort} = require('../common/config');
const api = require('../common/api');

api.start(appHost, appPort);

const database = require('./database')
