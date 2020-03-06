"use strict";

// the bloc below outputs a single randomLowerCaseLetter


// find page elements
var newPassword = getAlphabetLower;

var output = document.getElementById("output");
var output = document.getElementById("length");
var button = document.getElementById("button");
var checkboxLower = document.getElementById("checkboxLower");
var checkboxUpper = document.getElementById("checkboxUpper");
var checkboxNumber = document.getElementById("checkboxNumber");
var checkboxSymbol = document.getElementById("checkboxSymbol");


// strings
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // I've cheated and missed \ space and " because they break the string - do I need to use unicode refs?



// strings object
var randomStings = {
lower: getAlphabetLower,
upper: getAlphabetUpper,
number: getNumber,
symbol: getSymbol,
}



// outputs random letter from string
function randomNum() {
    return Math.floor(Math.random() * 26);
}



// outputs random letter from string
function getAlphabetLower() {
    return alphabetLower.charAt(randomNum());
}

function getAlphabetUpper() {
    return alphabetUpper.charAt(randomNum());
}

function getNumber() {
    return number.charAt(randomNum());
}

function getSymbol() {
    return symbol.charAt(randomNum());
}



// sets output to value.newPassword and outputs to page
button.addEventListener("click", function() {
    setOutput(newPassword);
});
// collects getAlphabetLower string stored in setOutput click function and sends to newPassword
function setOutput() {
    output.textContent = newPassword();
}




var listensLowerCase = checkboxLowerElement;
var listensUpperCase = checkboxUpperElement; 
var listensNumber = checkboxNumberElement; 
var listensSymbol = checkboxSymbolElement;  







/* Test loop
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
*/


