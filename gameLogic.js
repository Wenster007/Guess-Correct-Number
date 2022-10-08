'use strict';


// Single line code for all the below code from line 4 - 7
// const randomNumber = Math.trunc(Math.random()*20) + 1;

let randomNumber = Math.random() * 20; //will generate number from 0 - 19
randomNumber = Math.trunc(randomNumber);//This removes all the numbers after decimal

randomNumber = randomNumber + 1;//This adds 1 to make the guess from 1-20

let highScore = 0;
let score = 20;


document.querySelector(".check").addEventListener("click", function () {
    const guess = Number(document.querySelector(".guess").value);
    console.log(guess);

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Number";
    } 
    
    //When the guess is right
    else if (guess === randomNumber) {
        document.querySelector(".message").textContent = "✔Correct";

        document.querySelector("body").style.backgroundColor = "green";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector(".number").textContent = randomNumber;

        if (score > highScore){
            highScore = score;

            document.querySelector(".highscore").textContent = highScore;
        }

    } else if (guess !== randomNumber){
        if (score > 1) {
            document.querySelector(".message").textContent = guess > randomNumber? "📈Too High":"Too Low";
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            document.querySelector(".message").textContent = "😭You Lost the Game";
            document.querySelector(".score").textContent = 0;
        }
    }
    

    //Removed this part of code to avoid long code and use dry principle.

    // //When the guess is too high
    // else if (guess > randomNumber) {

    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📈Too High";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "😭You Lost the Game";
    //         document.querySelector(".score").textContent = 0;
    //     }

    // }
    
    // //When the is too low
    // else if (guess < randomNumber) {
    //     if (score > 1) {
    //         document.querySelector(".message").textContent = "📉Too Low";
    //         score--;
    //         document.querySelector(".score").textContent = score;
    //     } else {
    //         document.querySelector(".message").textContent = "😭You Lost the Game";
    //         document.querySelector(".score").textContent = 0;
    //     }
    // }

    document.querySelector(".again").addEventListener("click", function(){
        randomNumber = Math.trunc(Math.random()*20)+1;
        score = 20;
        document.querySelector(".score").textContent = score;
        document.querySelector("body").style.backgroundColor = "#222";
        document.querySelector(".number").style.width = "15rem";
        document.querySelector(".message").textContent = "Start guessing...";
        document.querySelector(".number").textContent = "?";
        document.querySelector(".guess").value = "";

    })


})