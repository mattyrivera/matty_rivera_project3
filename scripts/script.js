// -init

const catQuiz = {};

catQuiz.init = function(){
    catQuiz.calculateResults();
};

catQuiz.calculateResults = function(){
    $('form').on('submit', function(event){
        event.preventDefault();
        console.log('yayyy');
    });
};




$(function(){

    catQuiz.init();

});