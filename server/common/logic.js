console.log('Loading logic...');

function hello() {
  return 'Hello World from the api';
};

function sum(numberA, numberB) {
  return numberA + numberB;
};

module.exports.hello = hello;
module.exports.sum = sum;
