const Word = require('../models/Word');

exports.getWords = (req, res) => {
  Word
        .find((err, words) => res.json(words));
};


exports.postWord = (req, res) => {
  const word = req.body;
    // validation

  Word.create(word, (err, word) => res.json(word));
};
