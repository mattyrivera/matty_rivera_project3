// -init

const catQuiz = {};

catQuiz.init = function(){
    catQuiz.calculateResults();
};

catQuiz.calculateResults = function(){
    $('form').on('submit', function(event){
        event.preventDefault();
        // console.log('yayyy');
    });
};

// const catQuestion1 = $("input[name=catQuestion1]:checked").val();
// console.log(catQuestion1);
















// -------------------------------------------------------------------------
//      ::DOCUMENT READY

$(function(){

    catQuiz.init();



});