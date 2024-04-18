const fs = require('fs');

const sumNumbers = (fileA, fileB) => {
    const numberA = parseInt(fs.readFileSync(fileA, 'utf8'));
    const numberB = parseInt(fs.readFileSync(fileB, 'utf8'));
    const sum = numberA + numberB;
    console.log(sum);
}

sumNumbers('a.txt', 'b.txt');