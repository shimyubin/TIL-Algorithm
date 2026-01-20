const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number))

const T = input[0][0];

let sum = "";

for (let i = 1; i <= T; i++) {
    const a = input[i][0];
    const b = input[i][1];
    
    sum += (a + b) + '\n';
};

console.log(sum)