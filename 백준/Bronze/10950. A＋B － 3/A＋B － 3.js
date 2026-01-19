const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(num => num.trim().split(/\s+/).map(Number));

const T = input[0][0];

for (let i = 1; i <= T; i++) {
    console.log(input[i][0] + input[i][1]);
};