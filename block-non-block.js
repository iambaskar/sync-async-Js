const fs = require('fs');

// Sync

console.log('+++++++++');

const data = fs.readFileSync('hello.txt', 'utf-8');
console.log(data);

console.log('----------');

// Async

console.log('+++++++++++');

fs.readFile('hello.txt', { encoding: 'utf8' }, (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
console.log('-----------');
