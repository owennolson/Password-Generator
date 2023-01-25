var passwordLength = 0;
var choices = [];
var lowerChoice = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperChoice = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numChoice = ['0','1','2','3','4','5','6','7','8','9'];
var specialChoice = ['!','@','#','~','$','%','^','&','*','?','>','<'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var chosenChar = userInput();
  var passwordText = document.querySelector("#password");

  if (chosenChar) {
    var password = generatePassword();
    passwordText.value = password;
  } else {
    passwordText.value = "";
  }

}

function generatePassword() {
    var newPassword = "";
    for (var i =0; i < passwordLength; i++) {
        var randomChar = Math.floor(Math.random() * choices.length);
        newPassword = newPassword + choices[randomChar];
    }
    return newPassword;
}

function userInput() {
    choices = [];
    passwordLength = parseInt(prompt("Pick a number 8 - 128"));
    if (passwordLength  < 8 || passwordLength > 128) {
        alert("Number not in range. Please try again.");
        return false;
    }

    if (confirm("Would you like to use Lowercase Letters")) {
        choices = choices.concat(lowerChoice);
    }
    if (confirm("Would you like to use Uppercase Letters")) {
        choices = choices.concat(upperChoice);
    }
    if (confirm("Would you like to use Numbers")) {
        choices = choices.concat(numChoice);
    }
    if (confirm("Would you like to use Special Characters")) {
        choices = choices.concat(specialChoice);
    }
    return true;
}