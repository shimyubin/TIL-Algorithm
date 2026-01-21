const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split("\n").map(line => line.trim().split(/\s+/).map(Number));

const numberArr = input[1];
const v = input[2][0];

const output = numberArr.filter(num => num === v).length;

console.log(output)