// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength = 0,
  lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

function isPassLengthCorrect(passLength) {
  return passLength >= 8 && passLength <= 128;
}

while (!isPassLengthCorrect(passLength)) {
  passLength = parseInt(prompt("Provide a password length between 8 and 128"));
}

var options = {
  "passLength": passLength,
  "lowercase": confirm("Include lowercase letters?"),
  "uppercase": confirm("Include uppercase letters?"),
  "numeric": confirm("Include numbers?"),
  "specialCharacters": confirm("Include special characters?")
};

function generatePassword(options) {
  var password = "";
    possibleCharacters = [];
  
  if(options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }
  if(options.uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }

  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);