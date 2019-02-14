const config = {
  app: {
    host    : 'localhost',
    port    : 3000
  },
  db: {
    host    : 'localhost',
    port    : 3306,
    usr     : 'root',
    pwd     : 'example',
    name    : 'poc'
  }
};

console.log(config);

module.exports = config;
