module.exports = {
  devTool   : process.env.DEV_TOOL  == 1,
  appHost   : process.env.APP_HOST  || 'localhost',
  appPort   : process.env.APP_PORT  || 3000,
  dbHost    : process.env.DB_HOST   || 'localhost',
  dbPort    : process.env.DB_PORT   || 3306,
  dbUsr     : process.env.DB_USR    || 'root',
  dbPwd     : process.env.DB_PWD    || 'example',
  dbName    : process.env.DB_NAME   || 'poc',
  dbSqlite  : process.env.DB_SQLITE || '../../data.sqlite'
};

module.exports.serverUrl = `http://${module.exports.appHost}:${module.exports.appPort}`;

console.log(module.exports);
