"use strict";

// the bloc below outputs a single randomLowerCaseLetter


// find page elements
var outputElement = document.getElementById("output");
var lengthElement = document.getElementById("length");
var buttonElement = document.getElementById("button");
var checkboxLowerElement = document.getElementById("checkboxLower").checked;
var checkboxUpperElement = document.getElementById("checkboxUpper");
var checkboxNumberElement = document.getElementById("checkboxNumber");
var checkboxSymbolElement = document.getElementById("checkboxSymbol");


// strings
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // I've cheated and missed \ space and " because they break the string - do I need to use unicode refs?



// strings object
var randomStings = {
    length: getLength,
    lower: getAlphabetLower,
    upper: getAlphabetUpper,
    number: getNumber,
    symbol: getSymbol,
}



// outputs random letter from string
function randomNum() {
    return Math.floor(Math.random() * 26);
}


// stores length of desire password
function getLength() {
    return fieldValLength;
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


// listens to page elements and parses their value (didn't know all status/values could be combined in one function!!!)
buttonElement.addEventListener("click", function () {
    var fieldValLength = parseInt(lengthElement.value); // aghhhh!!! gets element value converts to integer from string
    var checkboxValLower = checkboxLowerElement.checked;
    var checkboxValUpper = checkboxUpperElement.checked;
    var checkboxValnumber = checkboxNumberElement.checked;
    var checkboxValsymbol = checkboxSymbolElement.checked;
    outputElement.innerText = newPassword(fieldValLength, checkboxValLower, checkboxValUpper, checkboxValnumber, checkboxValsymbol);
});


// outputPassword function
function outputPassword(length, lower, upper, number, symbol) {
}

// checks if checkboxes are true of false

function checkboxValidate() {
    if(checkboxLowerElement == "") {
alert("hell");
}
}


console.log(checkboxValidate());



