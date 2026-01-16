const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number))

let maxValue = input[0][0];
let maxRow = 0;
let maxCol = 0;

for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
        if (maxValue <= input[i][j]) {            
            maxValue = input[i][j];
            maxRow = i + 1;
            maxCol = j + 1;
        }
    }
}

console.log(maxValue);
console.log(maxRow, maxCol);