"use strict";

// the bloc below outputs a single randomLowerCaseLetter


// find page elements
var newPassword = alphabetLowerResult;
var numberResult = "";
var output = document.getElementById("output");
var button = document.getElementById("button");
var checkboxLower = document.getElementById("checkboxLower");
var checkboxUpper = document.getElementById("checkboxUpper");
var checkboxNumber = document.getElementById("checkboxNumber");
var checkboxSymbol = document.getElementById("checkboxSymbol");


// strings
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = " !#$%&'()*+,-./:;<=>?@[]^_`{|}~";



// outputs random letter from string
function randomNum() {
    return Math.floor(Math.random() * 26);
}

function alphabetLowerResult() {
    return alphabetLower.charAt(randomNum());
}



// sets output to value.newPassword and outputs to page
function setOutput() {
    output.textContent = newPassword();
}

button.addEventListener("click", function() {
    setOutput(alphabetLowerResult);
});











/* Test loop
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
*/


