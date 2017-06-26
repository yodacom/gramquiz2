const PersonalityReport = require('../models/PersonalityReport');

exports.getQuiz = (req, res) => {
  res.render("quiz/quiz", {});
};

exports.createQuiz = (req, res) => {
  //TODO: When the login works, ad the user to this object
  PersonalityReport.create({}, (err, quiz)=>{
    res.json(quiz);
  });
}

exports.addBestWord = (req, res)=>{
  let word = req.body.word;
  let word_id = req.body.id;
  let quiz_id = req.body.quiz;
  // let bestWords = [];
  PersonalityReport.findById(quiz_id, (err, quiz)=>{
    quiz.bestWords.push(word_id);
    quiz.save();
    console.log(`word saved ${word}`)
    //console.table(bestWords)

    res.json(quiz);
  });
};

//TODO: Do something similar to add word here
exports.removeBestWord = (req, res) =>{ 
  let word = req.body.word;
  let word_id = req.body.id;
  let.quiz_id = req.body.quiz;
  PersonalityReport.findById(quiz_id, (err, quiz)=>{
    quiz.bestWords.splice(word_id);
    quiz.save();
    //console.log(`word removed: ${word}`)
    res.json(quiz);
  
  });
};

// Define a Quiz schema. This would include the word selection and the final analysis report
// Write endpoint functions:



// 1. accept a word and put it in the selection list of the current user
// 2. accept a word and remove it from the selection list of current user
// 3. Use the selection list of the current user to perform an analysis

