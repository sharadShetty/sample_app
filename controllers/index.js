const { updateFirstOutput, updateSecondOutput } = require('../lib');

let inputOneValues = [];
let inputTwoValues = [];

const createControllers = () => {
  const controller = {
    //handle first inputs
    handleInput1: async (req, res) => {
      try {
        const { value } = req.params;
        inputOneValues.push(value);
        await updateFirstOutput(inputOneValues, inputTwoValues);
        await updateSecondOutput(inputOneValues, inputTwoValues);
        res.send('ok');
      } catch (err) {
        res.status(500).send({ err });
      }
    },

    //handle second inputs
    handleInput2: async (req, res) => {
      try {
        const { value } = req.params;
        inputTwoValues.push(value);
        await updateFirstOutput(inputOneValues, inputTwoValues);
        await updateSecondOutput(inputOneValues, inputTwoValues);
        res.send('ok');
      } catch (err) {
        res.status(500).send({ err });
      }
    },

    //to reset the arrays
    reset: async (req, res) => {
      try {
        inputOneValues = [];
        inputTwoValues = [];
        await updateFirstOutput(inputOneValues, inputTwoValues);
        await updateSecondOutput(inputOneValues, inputTwoValues);
        res.send('ok');
      } catch (err) {
        res.status(500).send({ err });
      }
    },
  };
  return controller;
};
module.exports = createControllers;
