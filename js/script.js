// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW


$("#shoot").click(function(){
    var userChoice = $("#input").val().toLowerCase();
    rockPaperScissor(userChoice);
    $("#userChoice").text(userChoice);
});
 

function rockPaperScissor(userChoice){
    let myArray = [];
    let computerChoice = Math.floor(Math.random() * 3);
    
    //display the result
    if(userChoice === "rock"){
        myArray = ["scissors", "rock", "paper"];
    } else if(userChoice === "scissors"){
        myArray = ["paper", "scissors", "rock"];
    } else if(userChoice === "paper"){
        myArray = ["rock", "paper", "scissors"];
    }
    
    $("#computerChoice").html(myArray[computerChoice]);
    
    
    logic(computerChoice);
}

function logic(computerChoice){
    let result;
    if(computerChoice < 1){
        result = "You Win!";
    } else if(computerChoice === 1){
        result = "It is a Tie!";
    } else if(computerChoice > 1){
        result = "You Lose!";
    }
    $("#result").html(result);
}

