exports.getQuiz = (req, res) => {
  res.render("quiz/quiz", {});
};

exports.addBestWord = (req, res)=>{
  let word = req.body.word;
  //TODO: we need to put this word in the database
    console.log('Best word added: ', word);
  res.json({
      message:'Word added'
  });
};

exports.removeBestWord = (req, res) =>{
  let word = req.body.word;
  console.log('Best word removed:', word);
  res.json({
    message:'word removed'
  });
};

// Define a Quiz schema. This would include the word selection and the final analysis report
// Write endpoint functions:



// 1. accept a word and put it in the selection list of the current user
// 2. accept a word and remove it from the selection list of current user
// 3. Use the selection list of the current user to perform an analysis

