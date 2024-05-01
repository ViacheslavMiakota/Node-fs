const fs = require("fs/promises");
const path = require("path");

// const sumNumbers = (fileA, fileB) => {
//     const numberA = parseInt(fs.readFileSync(fileA, 'utf8'));
//     const numberB = parseInt(fs.readFileSync(fileB, 'utf8'));
//     const sum = numberA + numberB;
//     console.log(sum);
// }

// const sumNumbers = async (fileA, fileB) => {
//     try {
//         const dataA = await fs.readFile(fileA, 'utf8');
//         const dataB = await fs.readFile(fileB, 'utf8');

//         const numberA = parseInt(dataA);
//         const numberB = parseInt(dataB);

//         const sum = numberA + numberB;
//         console.log(sum);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// sumNumbers('./data/a.txt', './data/b.txt');

const readFile = async (filePath) => {
  try {
    const resolvedPath = path.resolve(filePath);
    const data = await fs.readFile(resolvedPath, "utf8");
    return data;
  } catch (error) {
    throw new Error(`Error reading file ${filePath}: ${error}`);
  }
};

const parseNumber = (data) => {
  const number = parseInt(data);
  if (isNaN(number)) {
    throw new Error(`Invalid number format: ${data}`);
  }
  return number;
};

const sumNumbers = async (fileA, fileB) => {
  try {
    const dataA = await readFile(fileA);
    const dataB = await readFile(fileB);

    const numberA = parseNumber(dataA);
    const numberB = parseNumber(dataB);

    const sum = numberA + numberB;
    console.log(sum);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

sumNumbers("./data/a.txt", "./data/b.txt");
