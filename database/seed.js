const mongoose = require('mongoose');
const db = require('./');
const Project = require('./schema.js');
const seedData = require('./projects.json');

var seeder = (data) => {
  Project.create(data)
    .then(() => {
      console.log('Seeded data!')
      mongoose.connection.close()
    })
    .catch((err) => console.error(err));
};

seeder(seedData);