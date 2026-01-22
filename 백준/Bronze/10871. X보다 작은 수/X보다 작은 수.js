const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

const N = input[0][0];
const X = input[0][1];

let output = "";

for (let i = 0; i < N; i++) {
    if (input[1][i] < X) {
        output += input[1][i] + " ";
    }
}

console.log(output);