/**
 * Populate the DB with Words
 */

const keywords = require('./keywordsArray');
const Word = require('../models/Word');
const TypeReport = require('../models/TypeReport');
const reports = require('./personalReport');
const Matrix = require('../models/PersonalityMatrix');
const typeMatrix = require('./personalityMatrix');


function addWords(){
    console.log('...removing all words from the collection');
    Word.remove()
        .then(()=>{
            keywords.forEach((word)=>{
                Word.create(word, (err, word) => {});
            });
        });
    console.log("...re-populated the words in the DB");

    TypeReport.remove()
        .then(()=>{
            reports.forEach((report)=>{
                TypeReport.create(report, (err, word) => {});
            });
        });

    console.log("...re-populated the reports in the database");
    Matrix.remove()
        .then(()=>{
            typeMatrix.forEach((matrix)=>{
                Matrix.create(matrix, (err, matrix)=>{});
            });
        });

    console.log("...re-populated the matrices in the DB");

}

module.exports = addWords;