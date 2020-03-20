const mongoose = require('mongoose');

var db = mongoose.connect('mongodb://localhost/portfolio', {useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to db'))
  .catch((err) => console.error(err));

module.exports = db;