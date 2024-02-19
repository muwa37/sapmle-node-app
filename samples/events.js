const Emitter = require('events');

const emitter = new Emitter();

emitter.on('message', (data, second) => {
  console.log('sended msg: ' + data);
  console.log('second arg: ' + second);
});

const MESSAGE = process.env.MESSAGE || '';

if (MESSAGE) {
  emitter.emit('message', MESSAGE, 123);
} else {
  emitter.emit('message', 'no msg');
}
