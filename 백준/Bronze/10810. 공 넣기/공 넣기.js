const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/).map(Number));

const N = input[0][0];
const M = input[0][1];

let baskets = new Array(N).fill(0);

for (let i = 1; i <= M; i++) {
    let firstBasket = input[i][0] - 1;
    let lastBasket = input[i][1] - 1;
    for (let j = firstBasket; j <= lastBasket; j++) {
        baskets[j] = input[i][2];
    }   
}

console.log(baskets.join(" "))