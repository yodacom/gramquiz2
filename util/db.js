/**
 * Populate the DB with Words
 */

const keywords = require('./keywordsArray');
const Word = require('../models/Word');


function addWords(){
    Word.remove({});
    keywords.forEach((word)=>{
        Word.create(word, (err, word) => {});
    });
}

module.exports = addWords;