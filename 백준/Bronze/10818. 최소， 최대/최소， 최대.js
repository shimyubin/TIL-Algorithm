const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

const N = input[0][0];
const arr = input[1];

const max = Math.max(...arr);
const min = Math.min(...arr);

console.log(`${min} ${max}`)