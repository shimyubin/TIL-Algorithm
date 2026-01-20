const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

const X = input[0][0];

const N = input[1][0];

let calculatedSum = 0;

for (let i = 2; i <= N + 1; i++) {
    const a = input[i][0];
    const b = input[i][1];
    calculatedSum += a * b;
};

console.log(X === calculatedSum ? "Yes" : "No")