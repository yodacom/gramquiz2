const PersonalityReport = require("../models/PersonalityReport");

exports.removeBestWord = (req, res) => {
  let word = req.body.word;
  let word_id = req.body.id;
  let quiz_id = req.body.quiz;
  PersonalityReport.findById(quiz_id, (err, quiz) => {
    const index = quiz.bestWords.findIndex(word => {
      return word === word_id;
    });
    quiz.bestWords.splice(index, 1);
    quiz.save();
    //console.log(`word removed: ${word}`)
    res.json(quiz);
  });
};
