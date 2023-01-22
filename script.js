// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
//asks for length of password
let passwordLenght = prompt("pick a number 6-100");
//sets the variables to false by default
let lower = false;
let upper = false;
let numbers = false;
let specialChar = false;
//sets the available characters
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChoice = "1234567890";
let specialCharacters = "!@#$%^&*-_=+?><~"

function lowerCase() {
    if (confirm("Would you like to use Lower Case letters?")) {
        lower = true;
    } else {
        lower = false;
    }
}
function upperCase() {
    if (confirm("Would you like to use Upper Case letters?")) {
        upper = true;
    } else {
        upper = false;
    }
}
function numerics() {
    if (confirm("Would you like to use Numbers?")) {
        numbers = true;
    } else {
        numbers = false;
    }
}
function specialCharacter() {
    if (confirm("Would you like to use Special Characters?")) {
        specialChar = true;
    } else {
        specialChar = false;
    }
}
if ((passwordLenght > 8) && (passwordLenght < 128)) {
    lowerCase();
    upperCase();
    numerics();
    specialCharacter();
} else {
    alert ("value did not reach range")
}

// make functions to check for each constraint. make a big if at the end that if true then they all go in to the pass word