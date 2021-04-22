const mongoose = require('mongoose');

const challsSchema = mongoose.Schema({
  title: {
    type: String,
    maxlength: 30,
    default: '',
  },
  category: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  point: {
    type: Number,
    default: 0,
  },
  solves: {
    type: Number,
    default: 0,
  },
});

const Challenges = mongoose.model('Challenges', challsSchema);
module.exports = { Challenges };
