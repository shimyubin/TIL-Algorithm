const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

const X = input[0][1];
const A = input[1];

const resultArr = A.filter(num => num < X);

console.log(resultArr.join(' '));