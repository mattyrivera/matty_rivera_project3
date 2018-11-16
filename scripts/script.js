// -init

const catQuiz = {};
const answers = [];
const cats = [
    {
        cat : "Sphynx",
        // img: "",
        // desc: "",
    },
    {
        cat: "Russian Blue",
        // img: "",
        // desc: "",

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

catQuiz.init = function(){
    catQuiz.calculateResults();
};

catQuiz.calculateResults = function(){
    $('form').on('submit', function(event){
        event.preventDefault();
        // console.log('yayyy');

        //This is to get the length of questions.
        let questions = $(".fieldset-container").length;

        //Loop through all questions and answers.
        //Loop for question (5)
        for (i = 1; i <= questions; i++){
            //Loop for answers (3)
            for(j = 1; j <= 3; j++){
                //If input is checked get value
                if($(`input.cat-q${i}-a${j}`).is(":checked")){
                    //Get the answer value and convert into a number
                    let answer = parseInt($(`input.cat-q${i}-a${j}`).val());
                    //Push numbers into answers array
                    answers.push(answer);
                }
            }
        }
        console.log(answers);

        //Add up values from answers array for total score

        //"If statements for results section."
        if (answers == 5 && answers < 8) {
            $(".result-container").append(`
            <h2 class="result-title">${cats[0].cat}<h2>
            <img class="result-img src"${cats[0].img}">
            <p class="result-desc">${cats[0].desc}</p>
            `)
        } else if (answers == 8 && answers < 11) {
            $(".result-container").append(`
            <h2 class="result-title">${cats[0].cat}<h2>
            <img class="result-img src"${cats[0].img}">
            <p class="result-desc">${cats[0].desc}</p>
            `)
        } else if (answers == 11 && answers < 13) {
            $(".result-container").append(`
            <h2 class="result-title">${cats[0].cat}<h2>
            <img class="result-img src"${cats[0].img}">
            <p class="result-desc">${cats[0].desc}</p>
            `)
        } else if (answers == 13 && answers < 16) {
            $(".result-container").append(`
            <h2 class="result-title">${cats[0].cat}<h2>
            <img class="result-img src"${cats[0].img}">
            <p class="result-desc">${cats[0].desc}</p>
            `)
        }
    });
};

// -------------------------------------------------------------------------
//      ::DOCUMENT READY

$(function(){

    catQuiz.init();



});