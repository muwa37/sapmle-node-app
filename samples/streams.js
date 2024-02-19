const fs = require('fs');
const path = require('path');

const readableStream = fs.createReadStream(
  path.resolve(__dirname, 'sample.txt')
);

readableStream.on('data', chunk => {
  console.log(chunk);
});

readableStream.on('end', () => {
  console.log('ended reading');
});

readableStream.on('open', () => {
  console.log('started reading');
});

readableStream.on('error', e => {
  console.log('started reading');
});

const writableStream = fs.createWriteStream(
  path.resolve(__dirname, 'sample2.txt')
);

for (let i = 0; i < 25; i++) {
  writableStream.write(i + '\n');
}

writableStream.end();
