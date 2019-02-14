const config = {
  app: {
    devTool : false,
    host    : 'localhost',
    port    : 3003,
    url     : '',
  },
  db: {
    path    : '../../data.sqlite'
  }
};

config.app.url = `http://${config.app.host}:${config.app.port}`;

console.log(config);

module.exports = config;
