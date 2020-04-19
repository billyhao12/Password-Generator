var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    specialCharacters = [" ", "!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

var generateBtn = document.querySelector("#generate");

var passwordText = document.querySelector("#password");

generateBtn.addEventListener("click", startNewPassword);

function startNewPassword() {
  var passLength = 0;

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

  passwordText.value = generatePassword(options);

}

function generatePassword(options) {
  var password = "";
  possibleCharacters = [];
  requiredCharacters = [];

  if (options.lowercase) {
    possibleCharacters = possibleCharacters.concat(lowercase);
    requiredCharacters.push(lowercase[Math.floor(Math.random() * lowercase.length)]);
  }
  if (options.uppercase) {
    possibleCharacters = possibleCharacters.concat(uppercase);
    requiredCharacters.push(uppercase[Math.floor(Math.random() * uppercase.length)]);
  }
  if (options.numeric) {
    possibleCharacters = possibleCharacters.concat(numeric);
    requiredCharacters.push(numeric[Math.floor(Math.random() * numeric.length)]);
  }
  if (options.specialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    requiredCharacters.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
  }

  for (var i = 0; i < options.passLength; i++) {
    if (requiredCharacters[i]) {
      password += requiredCharacters[i];
    } else {
      password += possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)];
    }
  }

  return password;
}