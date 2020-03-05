// Password Generator functionality

var alphabetLower = "abcdefghijklmnopqrstuvwxyz";
var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[]^_`{|}~"

function randomNum() {
  return Math.floor(Math.random() * 26);
}
// strings have methods, like .charAt()
function alphabetLowerResult() {
  return alphabetLower.charAt(randomNum());
}
// activate function code with ()
console.log(alphabetLowerResult());
