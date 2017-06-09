const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./User');

const personSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  nickname: { type: String, unique: true },
  user: {type:Schema.Types.ObjectId, ref: 'User'}
},
{ timestamps: true });

const Person = mongoose.model('Person', personSchema);

module.exports = Person;