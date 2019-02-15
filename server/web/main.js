console.log('Loading web...');

const { app: { host, port } } = require('./config');

const db = require('../common/database');
const dbImpl = require('./database');
db.set(dbImpl);

const route = require('../common/route');
route.start(host, port);
