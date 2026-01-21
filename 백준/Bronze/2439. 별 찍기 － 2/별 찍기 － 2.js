const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim()

const N = parseInt(input);

let star = "";

for (let i = 1; i <= N; i++) {
    star += " ".repeat(N - i) + "*".repeat(i) + "\n";
}

console.log(star);