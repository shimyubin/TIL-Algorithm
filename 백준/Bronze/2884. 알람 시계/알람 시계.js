const fs = require('fs');

let [H, M] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

if (M < 45) {
    H = H - 1;
    M = 60 + M - 45;
} else {
    M = M - 45;
}

if (H < 0) {
    H = 23;
}

console.log(H, M);