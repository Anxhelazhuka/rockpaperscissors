// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
var userChoice;
userChoice="";

$("#shoot").click(function(){
    var userChoice = $("#input").val();

    $("#userChoice").text(userChoice);
});

var computerChoice;
computerChoice="";

var winner;
winner="";

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


