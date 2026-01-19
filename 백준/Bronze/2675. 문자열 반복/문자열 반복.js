const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n').map(line => line.trim().split(/\s+/))

const T = parseInt(input[0][0]);

for (let i = 1; i <= T; i++) {
    const R = parseInt(input[i][0]);
    const S = input[i][1];
    
    let P = ""
    
    for (let j = 0; j < S.length; j++) {
        P += S[j].repeat(R);
    };
    
    console.log(P)
};