const db = require('../database');
const Project = require('../database/schema.js');

var controller = {
  get: (req, res) => {
    Project.find()
      .then(data => res.status(200).send(data))
      .catch(err => console.error(err));
  },
};

module.exports = controller;