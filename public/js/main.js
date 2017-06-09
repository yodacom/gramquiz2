/**
 * The main client side JS file
 */
var quiz;

function displayWordGroup(keywords) {
    if (keywords.length == 0) {
        $('.wordlist').append('<h3> End of list Press the Analysis button to see your profile </h4>');
        $('#btnNext').off();
        $('#btnNext').click(performAnalysis);
        $('#btnNext').text('Analysis');
    } else {
        currentWords = [];
        $('.wordlist').empty();
        for (let i = 0; i < Math.min(5, keywords.length); i++) {
            const rnd = Math.floor(Math.random() * keywords.length);
            const word = keywords[rnd];
            currentWords.push(word);
            keywords.splice(rnd, 1);
            $('.wordlist').append(`<span class='word' data-id='${word._id}'>${word.word}</span>`);
        }

        console.log(currentWords);
    }
}


function moveWord(elem) {
    const word = $(this).text();
    const word_id = $(this).data("id");
    $(this).detach().prependTo('#answerListBox .bestWords');
    const index = currentWords.findIndex((w) => w.word == word);
    //person.addWord(currentWords[index]);
    $.ajax({
        method: 'PUT',
        url: 'http://localhost:3000/quiz/bestword',
        data: {
            word: word,
            id: word_id,
            quiz: quiz._id
        }
    })
        .done(function (res) {
            console.log(res.message);
        });
    currentWords.splice(index, 1);
}

function removeWord(elem) {
    const word = $(this).text();
    const word_id = $(this).data("id");
    // bestWords = [];
    $(this).detach().prependTo('#chooseWordBox .wordlist');
    // const index = bestWords.findIndex((w)=> w.word = word);
    //person.removeWord(word);
    $.ajax({
        method: 'DELETE',
        url: 'http://localhost:3000/quiz/bestword',
        data: {
            word: word,
            id: word_id,
            quiz: quiz._id
        }
    })
        .done(function (res) {
            console.log(res.message);
        });

    // currentWords.push(word);

}

function performAnalysis() {
    //person.analysis();
    //personalityReport();
    $.ajax({
        method: 'GET',
        url: 'http://localhost:3000/quiz/analysis',
        data: {
            quiz: quiz._id
        }
    })
        .done(function (res) {
            console.log(res);
            personalityReport(res);
        });
}

function personalityReport(report) {
    // hide quiz boxes to show report
    $('.contentBox').hide();
    $('.headerBox').hide();
    $('.contentBoxDescription').hide();
    $('.actions').hide();

    $('.personalityReport').append(`<h3>${report.center}</h3>`);
    // $('.personalityReport').append(`<h3>${report.primary}</h3>`);

    // $('.personalityReport').append(`<h3>${person.getSecondary()}</h3>`);
    $('.personalityReport').append(`<p>${report.description}</p>`);

    $('.reports').show();
}

function refreshPage() {
    location.reload();
}


$(document).ready(function () {

    var keywords;

    //load up the array of words
    $.ajax({
        url: 'http://localhost:3000/quiz/word'
    })
        .done(function (data) {
            keywords = data;
            displayWordGroup(keywords);
        });

    $.ajax({
        method: 'POST',
        url: 'http://localhost:3000/quiz'
    }).done(function (data) {
        console.log(data);
        quiz = data;
    });

    $('#chooseWordBox').on('click', '.word', moveWord);
    $('#answerListBox').on('click', '.word', removeWord);
    $('#btnNext').click((e) => {
        e.preventDefault();
        displayWordGroup(keywords);
    });

    $('#ref_btn').click(refreshPage);

});