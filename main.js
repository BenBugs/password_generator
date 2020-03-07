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


// outputs random letter from string
function randomNum(length) {
    return Math.floor(Math.random() * length);
}


// stores length of desired password
function getLength() {
    return fieldValLength;
}


// outputs random letter from string
function getAlphabetLower() {
    return alphabetLower.charAt(randomNum(alphabetLower.length));
}

function getAlphabetUpper() {
    return alphabetUpper.charAt(randomNum(alphabetUpper.length));
}

function getNumber() {
    return number.charAt(randomNum(number.length));
}

function getSymbol() {
    return symbol.charAt(randomNum(symbol.length));
}

function getCharacter(includeUpper, includeLower, includeNumber, includeSymbol) {
    var characters = "";

    // Build characters from options.
    if (includeUpper) {
        characters += getAlphabetUpper();
    }
    if (includeLower) {
        characters += getAlphabetLower();
    }
    if (includeNumber) {
        characters += getNumber();
    }
    if (includeSymbol) {
        characters += getSymbol();
    }
    

    // Pick one random character.
    return characters.charAt(randomNum(characters.length));
}


// listens to page elements and parses their value (didn't know all status/values could be combined in one function!!!)
generateElement.addEventListener("click", function () {
    var fieldValLength = parseInt(lengthElement.value); // aghhhh!!! gets element value converts to integer from string
    var checkboxValLower = checkboxLowerElement.checked;
    var checkboxValUpper = checkboxUpperElement.checked;
    var checkboxValnumber = checkboxNumberElement.checked;
    var checkboxValsymbol = checkboxSymbolElement.checked;

    console.log(fieldValLength, checkboxValLower, checkboxValUpper, checkboxValnumber, checkboxValsymbol);

    // We build on this value.
    var password = "";

    var i = 0;
    while (i < fieldValLength) {
        // Call our generic random character function with options.
        password += getCharacter(checkboxValUpper, checkboxValLower, checkboxValnumber, checkboxValsymbol);

        // increment iterator.
        i++;
        // i += 1;
        // i = i + 1;
    }
    
    // Output to the DOM.
    console.log(password);
    outputElement.innerText = password;
});
