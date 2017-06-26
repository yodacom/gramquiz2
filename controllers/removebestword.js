exports.removeBestWord = (req, res) =>{ 
  let word = req.body.word;
  let word_id = req.body.id;
  let quiz_id = req.body.quiz;
  PersonalityReport.findById(quiz_id, (err, quiz)=>{
    quiz.bestWords.splice(word_id);
    quiz.save();
    //console.log(`word removed: ${word}`)
    res.json(quiz);
    }
  )}