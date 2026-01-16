const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let maxValue = input[0];
let maxIndex = 1;

for (let i = 1; i < input.length; i++) {
    if (input[i] > maxValue) {
        maxValue = input[i];
        maxIndex = i + 1;
    }
}

console.log(maxValue);
console.log(maxIndex);