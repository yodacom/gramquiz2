const PersonalityReport = require("../models/PersonalityReport");

exports.getBestWord = (req, res) => {
  let word = req.body.word;
  let word_id = req.body.id;
  let quiz_id = req.body.quiz;
  PersonalityReport.findById(quiz_id, (err, quiz) => {
    // use a foreach ???
    const index = quiz.bestWords.findIndex(word => {
      return word === word_id;
    });   
  });
};