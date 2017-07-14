const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
        center: String,
        description: String,
        typeNumber: Number
});

const TypeReport = mongoose.model('TypeReport', reportSchema);

module.exports = TypeReport;