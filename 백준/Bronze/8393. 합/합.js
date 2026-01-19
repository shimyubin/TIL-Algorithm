const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim();

const A = parseInt(input);

console.log(A * (A + 1) / 2);