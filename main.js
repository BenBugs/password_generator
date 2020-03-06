"use strict";

// the bloc below outputs a single randomLowerCaseLetter


// find page elements
var outputElement = document.getElementById("output");
var lengthElement = document.getElementById("length");
var checkboxLowerElement = document.getElementById("checkboxLower");
var checkboxUpperElement = document.getElementById("checkboxUpper");
var checkboxNumberElement = document.getElementById("checkboxNumber");
var checkboxSymbolElement = document.getElementById("checkboxSymbol");
var generateElement = document.getElementById("generate");




// strings
var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var symbol = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~"; // I've cheated and missed \ space and " because they break the string - do I need to use unicode refs?



// strings object
var randomStrings = {
    length: getLength,
    lower: getAlphabetLower,
    upper: getAlphabetUpper,
    number: getNumber,
    symbol: getSymbol,
};



// outputs random letter from string
function randomNum() {
    return Math.floor(Math.random() * 26);
}


// stores length of desired password
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
generateElement.addEventListener("click", function () {
    var fieldValLength = parseInt(lengthElement.value); // aghhhh!!! gets element value converts to integer from string
    var checkboxValLower = checkboxLowerElement.checked;
    var checkboxValUpper = checkboxUpperElement.checked;
    var checkboxValnumber = checkboxNumberElement.checked;
    var checkboxValsymbol = checkboxSymbolElement.checked;

    console.log(fieldValLength, checkboxValLower, checkboxValUpper, checkboxValnumber, checkboxValsymbol);

});



// output password function
function outputPassword(length, lower, upper, number, symbol) {

    var outputedPassword = ''; // sets empty string to outputedPassword

    const countCheckboxes = lower + upper + number + symbol; // Counts the the checkboxes

    console.log(countCheckboxes);


    var checkboxArray = [lower, upper, number, symbol];

    console.log(checkboxArray);

}


