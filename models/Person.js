const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nickname: { type: String, unique: true },
  personalityType: String,
  bestWords: Array,
},
{ timestamps: true });

const Person = mongoose.model('Person', personSchema);

module.exports = Person;