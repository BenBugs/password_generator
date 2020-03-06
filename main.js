"use strict";

// the bloc below outputs a single randomLowerCaseLetter


// find page elements
var outputElement = document.getElementById("output");
var lengthElement = document.getElementById("length");
var buttonElement = document.getElementById("button");
var checkboxLowerElement = document.getElementById("checkboxLower");
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
checkboxLowerIsTrue('#checkboxLower').change(function () {
    if (checkboxLowerIsTrue(this).attr('checked')) {
        checkboxLowerIsTrue(this).val('TRUE');
    } else {
        checkboxLowerIsTrue(this).val('FALSE');
    }
});

checkboxUpperIsTrue('#checkboxLower').change(function () {
    if (checkboxUpperIsTrue(this).attr('checked')) {
        checkboxUpperIsTrue(this).val('TRUE');
    } else {
        checkboxUpperIsTrue(this).val('FALSE');
    }
});

checkboxNumberIsTrue('#checkboxLower').change(function () {
    if (checkboxNumberIsTrue(this).attr('checked')) {
        checkboxNumberIsTrue(this).val('TRUE');
    } else {
        checkboxNumberIsTrue(this).val('FALSE');
    }
});

checkboxSymbolIsTrue('#checkboxLower').change(function () {
    if (checkboxSymbolIsTrue(this).attr('checked')) {
        checkboxSymbolIsTrue(this).val('TRUE');
    } else {
        checkboxSymbolIsTrue(this).val('FALSE');
    }
});










/* Test loop
var myStringArray = ["Hello","World"];
var arrayLength = myStringArray.length;
for (var i = 0; i < arrayLength; i++) {
    console.log(myStringArray[i]);
    //Do something
}
*/


