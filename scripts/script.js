// -init
const catQuiz = {};
catQuiz.answers = [];
const cats = [
    {
        cat : "Sphynx",
        img: "assets/img-1.jpg",
        desc: "soooo cute",
    },
    {
        cat: "Russian Blue",
        // img: "",
        desc: "literally the cutest cat ever",

    },
    {
        cat: "Persian",
        // img: "",
        // desc: "",
    },
    {
        cat: "Domestic Shorthair",
        // img: "",
        // desc: ""
    }
];

console.log(cats);

catQuiz.init = function(){
    catQuiz.calculateResults();
};

catQuiz.calculateResults = function(){
    $('form').on('submit', function(event){
        event.preventDefault();
        // console.log('yayyy');
        catQuiz.answers = [];

        //This is to get the length of questions.
        let questions = $(".fieldset-container").length;

        //Loop through all questions and answers.
        //Loop for question (5)
        for (let i = 1; i <= questions; i++){
            //Loop for answers (3)
            for(let j = 1; j <= 3; j++){
                //If input is checked get value
                if($(`input.cat-q${i}-a${j}`).is(":checked")){
                    //Get the answer value and convert into a number
                    let answer = parseInt($(`input.cat-q${i}-a${j}`).val());
                    //Push numbers into answers array
                    catQuiz.answers.push(answer);
                }
            }
        }
        console.log(catQuiz.answers);

        //Add up values from answers array for total score
        total = 0;
        for (k = 0; k < catQuiz.answers.length; k++){
            total += catQuiz.answers[k];
        }
        console.log(total);

        //"If statements for results section."
        $(".results-container").html("");
        if (total >= 5 && total <= 7) {
            $(".results-container").append(`
            <h2 class="result-title">${cats[0].cat}<h2>
            <img class="result-img" src="${cats[0].img}">
            <p class="result-desc">${cats[0].desc}</p>
            `)
        } 

        // FIX THE CODE IN THESE ANSWERS

        else if (total >= 8 && total <= 10) {
            $(".results-container").append(`
            <h2 class="result-title">${cats[1].cat}<h2>
            <img class="result-img src"${cats[1].img}">
            <p class="result-desc">${cats[1].desc}</p>
            `)
        } 
        else if (total >= 11 && total <= 12) {
            $(".results-container").append(`
            <h2 class="result-title">${cats[2].cat}<h2>
            <img class="result-img src"${cats[2].img}">
            <p class="result-desc">${cats[2].desc}</p>
            `)
        } 
        else if (total >= 13 && total <= 15) {
            $(".results-container").append(`
            <h2 class="result-title">${cats[3].cat}<h2>
            <img class="result-img src"${cats[3].img}">
            <p class="result-desc">${cats[3].desc}</p>
            `)
        };
    });
};

// -------------------------------------------------------------------------
//      ::DOCUMENT READY

$(function(){

    catQuiz.init();



});