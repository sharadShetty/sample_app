const { promisify } = require('util');
const fs = require('fs');

const writeFile = promisify(fs.writeFile);

const lib = {
  //for updating the output1.txt
  updateFirstOutput: async (inputOneValues, inputTwoValues) => {
    const maxArraySize =
      inputOneValues.length >= inputTwoValues.length
        ? inputOneValues.length
        : inputTwoValues.length;
    const res = [];
    for (let i = 0; i < maxArraySize; i++) {
      if (i % 2 === 0 && inputOneValues[i]) {
        //for even index
        res.push(inputOneValues[i]);
      } else if (i % 2 !== 0 && inputTwoValues[i]) {
        //for odd index
        res.push(inputTwoValues[i]);
      }
    }
    //add new line between values
    const newRes = res.reduce(
      (acc, curr) => (acc ? acc + '\n' + curr : curr),
      ''
    );
    await writeFile('outputs/output1.txt', newRes);
  },

  //for updating the output2.txt
  updateSecondOutput: async (inputOneValues, inputTwoValues) => {
    const maxArraySize =
      inputOneValues.length >= inputTwoValues.length
        ? inputOneValues.length
        : inputTwoValues.length;
    const res = [];
    for (let i = 0; i < maxArraySize; i++) {
      if (inputTwoValues[i]) {
        res.push(inputTwoValues[i]);
      }
      if (inputOneValues[i]) {
        res.push(inputOneValues[i]);
      }
    }
    //add new line between values
    const newRes = res.reduce(
      (acc, curr) => (acc ? acc + '\n' + curr : curr),
      ''
    );
    await writeFile('outputs/output2.txt', newRes);
  },
};

module.exports = lib;
