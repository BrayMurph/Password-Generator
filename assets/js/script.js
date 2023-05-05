var length = 8;
var choiceArr = [];

var specialArr = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '[', ']', '{', '}', '|', '?', '/', '<', '>'];
var lowerArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',];
var numberArr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
  var rightPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (rightPrompts) {
    var rightpassword = generatePassword();
    
    passwordText.value = rightpassword;
  } else {
    passwordText.value = "";

  }
  

}

function generatePassword() {
    var password = "";
    for(var i = 0; i < length; i++) {
        var randomCharacter = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomCharacter];
    }
    return password;
}

function getPrompts() {
    choiceArr = [];

    length = parseInt(prompt("How many characters do you want in your password? (Between 8 to 128)"));

    if (isNaN(length) || length < 8 || length > 128) {
        alert("It needs to be a number from 8 to 128 characters.");
        return false;
    }

    if (confirm("Do you want lowercase letters in your password?")) {
        choiceArr = choiceArr.concat(lowerArr);
    }
    if (confirm("Do you want uppercase letters in your password?")) {
        choiceArr = choiceArr.concat(upperArr);
    }
    if (confirm("Do you want numbers in your password?")) {
        choiceArr = choiceArr.concat(numberArr);
    }
    if (confirm("Do you want special characters in your password?")) {
        choiceArr = choiceArr.concat(specialArr);
    }
    return true;


}