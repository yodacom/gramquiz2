/**
 * Populate the DB with Words
 */

const keywords = require('./keywordsArray');
const Word = require('../models/Word');
const TypeReport = require('../models/TypeReport');
const reports = require('./personalReport');


function addWords(){
    console.log('...removing all words from the collection');
    Word.remove()
        .then(()=>{
            console.log('...adding the following words');
            keywords.forEach((word)=>{
                console.log('......', word.word);
                Word.create(word, (err, word) => {});
            });
        });

    TypeReport.remove()
        .then(()=>{
            reports.forEach((report)=>{
                TypeReport.create(report, (err, word) => {});
            });
        });

}

module.exports = addWords;