const fs = require('fs');

const [A, B, C] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

let reward = 0;

if (A == B && B== C) {
    reward = 10000 + A * 1000;
} else if (A == B || A == C) {
    reward = 1000 + A * 100;
} else if (B == C) {
    reward = 1000 + B * 100;
} else {
    const maxVal = Math.max(A, B, C);
    reward = maxVal * 100;
};

console.log(reward);