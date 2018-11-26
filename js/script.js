// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW


$("#shoot").click(function(){
    var userChoice = $("#input").val();
    $("#userChoice").text(userChoice);
});
var userChoice;
var userChoice= "rock";
var userChoice= "paper";
var userChoice= "scissors";

var computerChoice;
computerChoice="";

var winner;
winner="";

$("#shoot").click(function(){
 var userChoice = $("#userChoice").val();
 var computerChoice = $("#computerChoice").val();
 var winner = $("#result").val();
   
   if(computerChoice > .888  && userChoice==="rock") {
        $("#result").html("There is a tie"); 
    }
    else  if(computerChoice > .888 && userChoice==="paper") {
        $("#result").html("User wins!");  
    }
     else  if(computerChoice > .888 && userChoice==="scissors") {
         $("#result").html("Computer wins"); 
    }
    else  if(computerChoice > .555 && userChoice==="scissors") {
         $("#result").html("User wins!"); 
    }
     else  if(computerChoice > .555 && userChoice==="paper") {
        $("#result").html("There is a tie"); 
    }
    else  if(computerChoice > .555 && userChoice==="rock") {
        $("#result").html("Computer wins!"); 
    } 
     else  if(computerChoice < .555 && userChoice==="rock") {
        $("#result").html("User wins!"); 
    } 
     else  if(computerChoice < .555 && userChoice==="scissors") {
        $("#result").html("There is a tie"); 
    } 
     else  if(computerChoice < .555 && userChoice==="paper") {
        $("#result").html("Computer wins!"); 
    } 
});


var randomNumber;
randomNumber= 0;

$("#shoot").click(function(){
var computerChoice = Math.random();
    console.log(computerChoice);
   
    if(computerChoice > .888) {
        $("#computerChoice").html("rock"); 
    }
    else if(computerChoice > .555){
        $("#computerChoice").html("paper"); 
    }
    else {
       $("#computerChoice").html("scissors");   
}
});


