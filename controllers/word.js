const Word = require('../models/Word');

//Return a list of ALL words
exports.getWords = (req, res) => {
  Word
        .find((err, words) => res.json(words));
};


//Create a new word
exports.postWord = (req, res) => {
  const word = req.body;
    // validation

  Word.create(word, (err, word) => res.json(word));
};

//To Update a word
exports.updateWord = (req, res) => {
  //validation
  const wordToUpdate = req.body;
  Word.findOneAndUpdate(
      {_id:wordToUpdate._id},
      wordToUpdate,
      (updatedWord)=>{
        res.json(updatedWord);
      }
  );
}