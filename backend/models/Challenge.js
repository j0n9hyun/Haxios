const mongoose = require('mongoose');

const challSchema = mongoose.Schema({
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
  flag: {
    type: String,
    default: '',
  },
  solves: {
    type: Number,
    default: 0,
  },
});

const Challenge = mongoose.model('Challenge', challSchema);
module.exports = { Challenge };
