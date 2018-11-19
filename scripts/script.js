// -init
const catQuiz = {};
catQuiz.answers = [];
const cats = [
    {
        cat : "Congratulations, you are a Sphynx cat!",
        img: "assets/img-2.jpg",
        desc: "soooo cute",
    },
    {
        cat: "Congratulations, you are a Russian Blue cat!",
        img: "assets/nap1.jpg",
        desc: "literally the cutest cat ever",

    },
    {
        cat: "Congratulations, you are a Persian Cat!",
        img: "assets/persiantest1.png",
        desc: "fluffy baby",
    }
];

console.log(cats);

catQuiz.init = function(){
    catQuiz.calculateResults();
    catQuiz.buttonAction();
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
        // console.log(total);

        //"If statements for results section."

        $(".final-result").css('display', 'flex');
        $(".results-section-container").html("");

        if (total >= 5 && total <= 8) {
            $(".results-section-container").append(`
            <h2 class="result-title">${cats[0].cat}</h2>
            <img class="result-img" src="${cats[0].img}">
            <p class="result-desc">${cats[0].desc}</p>
            `).css('background-color', "#89d3dd")
        } 

        else if (total >= 9 && total <= 12) {
            $(".results-section-container").append(`
            <h2 class="result-title">${cats[1].cat}</h2>
            <img class="result-img" src="${cats[1].img}">
            <p class="result-desc">${cats[1].desc}</p>
            `)
        } 
        else if (total >= 13 && total <= 15) {
            $(".results-section-container").append(`
            <h2 class="result-title">${cats[2].cat}</h2>
            <img class="result-img" src="${cats[2].img}">
            <p class="result-desc">${cats[2].desc}</p>
            `)

        };
        // Scroll function for results button
        $("html, body").animate({
            scrollTop: $(".final-result").offset().top
        }, 1000);
    });
};

// Scroll functions

catQuiz.buttonAction = function() {
    $(".button-next").on("click", function(e){
        e.preventDefault();
        let button = $(this).data("button");

        if (button == 1) {
            $("html, body").animate({
                scrollTop: $(".question-section").offset().top
            }, 1000);
        } else if (button == 2) {
            $("html, body").animate({
                scrollTop: $("#second").offset().top
            }, 1000);
        } else if (button == 3) {
            $("html, body").animate({
                scrollTop: $("#third").offset().top
            }, 1000);
        } else if (button == 4) {
            $("html, body").animate({
                scrollTop: $("#fourth").offset().top
            }, 1000);
        } else if (button == 5) {
            $("html, body").animate({
                scrollTop: $("#fifth").offset().top
            }, 1000);
        }
    })
}

// -------------------------------------------------------------------------
//      ::DOCUMENT READY

$(function(){

    catQuiz.init();



});