const path = require('path');

//most used path methods

console.log(path.join(__dirname, 'first', 'second', 'third'));

console.log('get abs path', path.resolve('first', 'second', 'third'));

console.log(path.parse(path.resolve('first', 'second', 'third')));

console.log('separator in os', path.sep);

console.log(path.isAbsolute('first/second'));

console.log(
  'file name',
  path.basename(path.resolve('first', 'second', 'third'))
);

console.log('extension name', path.extname(path.resolve('first', 'second.js')));

//http

const url = new URL('htt://localhost:8080/users?id=1234');

console.log(url);
