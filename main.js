"use strict";

// the bloc below outputs a single randomLowerCaseLetter

// find page elements
var newPassword = alphabetLowerResult;
var output = document.getElementById("output");
var button = document.getElementById("button");
var length = document.getElementById("button");


// outputs random letter from string
function randomNum() {
    return Math.floor(Math.random() * 26);
}

var alphabetLower = "abcdefghijklmnopqrstuvwxyz";

function alphabetLowerResult() {
    return alphabetLower.charAt(randomNum());
}


// functions
function setOutput() {
    output.textContent = newPassword(); // This code...
}


button.addEventListener("click", function() {
    setOutput(alphabetLowerResult);
});