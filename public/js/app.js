import { Person, PersonalityType } from './person';

const $ = require('jquery');


/* eslint-env jquery */

// I want to pick 5 random words from the object array and display them.  then user will choose one or more of the five words to add to a list that is "most like me".  Then with a continue button go back to the array and display another set of 5 words. keep doing this till all the words of the array have been viewed.  Choosing words by clicking on them, highlighting them, and then drag and drop them to the other list box (OR prefer to click on word and have it animate and move to the other list box.)
// when finished the NEXT button will be pressed to bring up the next set of randomly chosen words.
// After all the word groups have been seen and selections made, then, based on the words chosen, and other keys related to those words are calculated, a personality profile will be displayed with information about their personality.

let currentWords = [];
const person = new Person();

// CLICK TO MOVE WORD FROM NON SELECTED TO SELECTED

function moveWord(elem) {
  const word = $(this).text();
  $(this).detach().appendTo('#answerListBox .bestWords');
  const index = currentWords.findIndex(w => w.word == word);
  person.addWord(currentWords[index]);
  currentWords.splice(index, 1);
}

function removeWord() {
  const word = $(this).text();
  $(this).detach().appendTo('#chooseWordBox .wordlist');

  person.removeWord(word);
  currentWords.push(word);
}

function performAnalysis() {
  person.analysis();
  personalityReport();
}

function displayWordGroup(keywords) {
  if (keywords.length == 0) {
    $('.wordlist').append('<h3> End of list Press the Analysis button to see your profile </h4>');
    $('#btnNext').off();
    $('#btnNext').click(performAnalysis);
    $('#btnNext').text('Analysis');
  } else {
    currentWords = [];
    $('.wordlist').empty();
    for (let i = 0; i < 5; i++) {
      const rnd = Math.floor(Math.random() * keywords.length);
      const word = keywords[rnd];
      currentWords.push(word);
      keywords.splice(rnd, 1);
      $('.wordlist').append(`<span class='word'>${word.word}</span>`);
    }

    console.log(currentWords);
  }
}

$(() => {
  displayWordGroup(keywords);

  $('#btnNext').click((e) => {
    e.preventDefault();
    displayWordGroup(keywords);
  });

  $('#chooseWordBox').on('click', '.word', moveWord);
  $('#answerListBox').on('click', '.word', removeWord);

  $('#ref_btn').click(refreshPage);
});


// GENERATE REPORT

// Personality Analysis

function personalityReport() {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();

  $('.personalityReport').append(`<h3>${person.getCenter()}</h3>`);
  $('.personalityReport').append(`<h3>${person.getPrimary()}</h3>`);

  $('.personalityReport').append(`<h3>${person.getSecondary() }</h3>`);
  $('.personalityReport').append(`<p>${person.getReport() }</p>`);

  $('.reports').show();
}

function refreshPage() {
  location.reload();
}

// Primary Trait

function personalityReport2(countByPrimary) {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();
  // Primary Analysis

  if (countByPrimary.R > countByPrimary.B && countByPrimary.R > countByPrimary.G) {
    $('.personalityReport').append(`<h3>${R }</h4>` + `<br/>${ More}`);
  } else if (countByPrimary.B > countByPrimary.R && countByPrimary.B > countByPrimary.G) {
    $('.personalityReport').append(`<h3>${ B}</h4>` + `<br/>${More}`);
  } else if (countByPrimary.G > countByPrimary.R && countByPrimary.G > countByPrimary.R) {
    $('.personalityReport').append(`<h3>${ G}</h4>` + `<br/>${More}`);
  } else {
    $('.personalityReport').append(`<h3>${ Ba}</h4>` + `<br/>${More}`);
  }
}

// Secondary Trait

function personalityReport3(countBySecondary) {
    // hide quiz boxes to show report
  $('.contentBox').hide();
  $('.headerBox').hide();
  $('.contentBoxDescription').hide();
  $('.actions').hide();

  // Type Calc Analysis

  if (primary.R && secondary.o) {
    $('.personalityReport').append(`<h3>${one}</h4>` + `<br/>${More}`);
  } else if (primary.G && secondary.f) {
    $('.personalityReport').append(`<h3>${Two }</h4>` + `<br/>${More}`);
  } else if (primary.G && Secondary.g) {
      $('.personalityReport').append(`<h3>${ Three }</h4>` + `<br/>${More}`);
    } else if (primary.G && Secondary.t) {
      $('.personalityReport').append(`<h3>${ Four }</h4>` + `<br/>${ More}`);
    } else if (primary.B && Secondary.l) {
      $('.personalityReport').append(`<h3>${Five}</h4>` + `<br/>${More}`);
    } else if (primary.B && Secondary.b) {
      $('.personalityReport').append(`<h3>${Six}</h4>` + `<br/>${More}`);
    } else if (primary.B && Secondary.w) {
      $('.personalityReport').append(`<h3>${ Seven}</h4>` + `<br/>${More}`);
    } else if (primary.R && Secondary.p) {
      $('.personalityReport').append(`<h3>${Eight }</h4>` + `<br/>${More}`);
    } else if (primary.R && Secondary.r) {
      $('.personalityReport').append(`<h3>${Nine}</h4>` + `<br/>${More}`);
    }
  $('.personalityReport').append(`<h3>${Ba }</h4>` + `<br/>${More}`);
}

