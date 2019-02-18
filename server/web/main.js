console.log('Loading web...');

const { app: { host, port } } = require('./config');

const db = require('../common/database');
const dbImpl = require('./databaseMySql');
db.set(dbImpl);

const server = require('../common/server');
server.start(host, port);
