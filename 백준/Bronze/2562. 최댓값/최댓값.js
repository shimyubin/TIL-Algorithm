const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const max = Math.max(...input);

const maxIndex = input.indexOf(max) + 1

console.log(`${max}\n${maxIndex}`)