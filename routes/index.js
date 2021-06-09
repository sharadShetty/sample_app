const express = require('express');
const router = express.Router();

const registerRoute = (app, controller) => {
  router.get('/input1/:value', controller.handleInput1);
  router.get('/input2/:value', controller.handleInput2);
  router.get('/reset', controller.reset);

  app.use('/', router);
};

module.exports = registerRoute;
