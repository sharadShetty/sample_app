const express = require('express');

module.exports = () => {
  const app = express();
  app.use(express.json()).use(express.urlencoded({ extended: true }));

  return app;
};
