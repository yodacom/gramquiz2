const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
  word: String,
  primary_group: String,
  secondary_group: String,
  personalityType: { type: Number, min: 1, max: 9 },
  level: String,
  page: Number,
  page2: Number,
  center: String,
  tooltip: String
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;
