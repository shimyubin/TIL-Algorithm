const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);

const [A, B] = input.map(Number)

if (A > B) {
    console.log(">");
} else if (A < B) {
    console.log("<");
} else {
    console.log("==");
};