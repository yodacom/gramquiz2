const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personalitySchema = new mongoose.Schema({
    personalityType: {type:Schema.Types.ObjectId, ref:'TypeReport'},
    bestWords: [{type:Schema.Types.ObjectId, ref: 'Word'}],
});

const PersonalityReport = mongoose.model('PersonalityReport', personalitySchema);

module.exports = PersonalityReport;