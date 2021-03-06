const Router = require('express').Router();
const controller = require('./controller.js');

Router
  .route('/')
  .get(controller.get)
  .post(controller.post)

module.exports = Router;