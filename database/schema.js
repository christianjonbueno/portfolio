const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
  title: String,
  tech: [String],
  description: [String],
  image: String,
  image_2: String,
  link: String
});

module.exports = Project = mongoose.model('Project', projectSchema);