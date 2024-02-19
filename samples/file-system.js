const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const path = require('path');

fs.mkdirSync(path.resolve(__dirname, 'dir'));

fs.mkdirSync(path.resolve(__dirname, 'dirreq', 'dir2', 'dir3'), {
  recursive: true,
});

//create

fs.mkdir(path.resolve(__dirname, 'dirasync'), err => {
  if (err) {
    console.log(err);
    return;
  }
  console.log('dir created');
});

//remove

fs.rmdir(path.resolve(__dirname, 'dirasync'), err => {
  if (err) {
    throw err;
  }
});

fs.writeFile(path.resolve(__dirname, 'text.txt'), '1234 qwerty', err => {
  if (err) {
    throw err;
  }
  console.log('file written');
});

fs.appendFile(path.resolve(__dirname, 'text.txt'), 'appending sample', err => {
  if (err) {
    throw err;
  }
  console.log('file written');
});

//fsPromise

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, err => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => {
    fs.appendFile(path, data, err => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

const readFileAsync = async path => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        return reject(err.message);
      }
      resolve(data);
    });
  });
};

const removeFileAsync = async path => {
  return new Promise((resolve, reject) => {
    fs.rm(path, err => {
      if (err) {
        return reject(err.message);
      }
      resolve();
    });
  });
};

//sample file handler

const text = process.env.TEXT || '';

writeFileAsync(path.resolve(__dirname, 'text.txt'), text)
  .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
  .then(data => data.split(' ').length)
  .then(count =>
    writeFileAsync(
      path.resolve(__dirname, 'count.txt'),
      `words count: ${count}`
    )
  )
  .then(() => removeFileAsync(path.resolve(__dirname, 'text.txt')));
