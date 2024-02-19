const os = require('os');
const cluster = require('cluster');

console.log(os.platform());
console.log(os.arch());
console.log(os.cpus().length);

const cpus = os.cpus();

for (let i = 0; i < cpus.length - 1; i++) {
  const CPUcore = cpus[i];
}

if (cluster.isMaster) {
  for (let i = 0; i < cpus.length - 1; i++) {
    cluster.fork();
  }
  cluster.on('exit', worker => {
    console.log('worker died');
    cluster.fork();
  });
} else {
  console.log('worker works');
}
