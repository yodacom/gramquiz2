const mongoose = require('mongoose');

const typeSchema = new mongoose.Schema({
        primary: String,
        secondary: String,
        type: { type: Number, min: 1, max: 9 },
        center: String
});

const Word = mongoose.model('Type', typeSchema);

module.exports = Type;