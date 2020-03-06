"use strict";

// the bloc below outputs a single randomLowerCaseLetter

// find page elements
var newPassword = alphabetLowerResult;
var numberResult = "";
var output = document.getElementById("output");
var button = document.getElementById("button");
var length = document.getElementById("button");


// outputs random letter from string
function randomNum() {
    return Math.floor(Math.random() * 26);
}

var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";

function alphabetLowerResult() {
    return alphabetLower.charAt(randomNum());
}


// sets output to value of newPassword and outputs
function setOutput() {
    output.textContent = newPassword();
}

button.addEventListener("click", function() {
    setOutput(alphabetLowerResult);
});

// Test loop
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}

