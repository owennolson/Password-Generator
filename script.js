// Assignment Code
let lower = "";
let upper = "";
let numbers = "";
let specialChar = "";
let lowerLetters = "abcdefghijklmnopqrstuvwxyz";
let upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numberChoice = "1234567890";
let specialCharacters = "!@#$%^&*-_=+?><~"
var generateBtn = document.querySelector("#generate");
function generatePassword() {
    for (var i = 0; i === passwordLength; i++){
        console.log("a");
    }
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
generateBtn.addEventListener("click", function(){
    function passwordLength() {
        let passwordLength = prompt("pick a number 8-128");
        if ((passwordLength < 8) && (passwordLength > 128)) {
            alert("value out of range, please try again")
            passwordLength();
        }
    }
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
    passwordLength();
    lowerCase();
    upperCase();
    numerics();
    specialCharacter();
})