const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
        center: String,
        primary: String,
        secondary: String,
        report: String
});

const Report = mongoose.model('Report', reportSchema);

module.exports = Report;