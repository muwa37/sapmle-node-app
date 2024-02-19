const http = require('http');
const EventEmitter = require('events');
const Router = require('./app/Router');

const PORT = process.env.PORT || 5000;
const emitter = new EventEmitter();

const router = new Router();

router.get('/users', (req, res) => {
  res.end('u send req to /users');
});

router.get('/posts', (req, res) => {
  res.end('u send req to /posts');
});

const server = http.createServer();

server.listen(PORT, () => {
  console.log(`serv started on ${PORT}`);
});
