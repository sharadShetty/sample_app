const createControllers = () => {
  const controller = {
    handleInput1: async (req, res) => {
      try {
        res.send('Welcome to input 1');
      } catch (err) {
        res.status(400).send({ err });
      }
    },
    handleInput2: async (req, res) => {
      try {
        res.send('Welcome to input 2');
      } catch (err) {
        res.status(400).send({ err });
      }
    },
  };
  return controller;
};
module.exports = createControllers;
