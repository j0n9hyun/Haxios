const mongoose = require('mongoose');

const challsSchema = mongoose.Schema({
  // challId: {
  //   type: Number,
  //   unique: true,
  //   index: true,
  //   default: 1,
  // },
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
  solver: {
    type: mongoose.Schema.Types.Mixed,
  },
  flag: {
    type: String,
    // Options: { hidden: true },
  },
  isSolved: {
    type: Number,
    default: 0,
  },
  file: {
    type: String,
  },
  link: {
    type: String,
  },
});

const Challenges = mongoose.model('Challenges', challsSchema);
module.exports = { Challenges };
