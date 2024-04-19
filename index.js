// const fs = require('fs');

// const sumNumbers = (fileA, fileB) => {
//     const numberA = parseInt(fs.readFileSync(fileA, 'utf8'));
//     const numberB = parseInt(fs.readFileSync(fileB, 'utf8'));
//     const sum = numberA + numberB;
//     console.log(sum);
// }

const fs = require('fs/promises');

const sumNumbers = async (fileA, fileB) => {
    try {
        const dataA = await fs.readFile(fileA, 'utf8');
        const dataB = await fs.readFile(fileB, 'utf8');
        
        const numberA = parseInt(dataA);
        const numberB = parseInt(dataB);
        
        const sum = numberA + numberB;
        console.log(sum);
    } catch (error) {
        console.error('Error:', error);
    }
}

sumNumbers('./data/a.txt', './data/b.txt');
