
var generateBtn = document.querySelector("#generate");
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Function for creating the password from user inputs
function generatePassword() {
  var finalPassword = "";
  var passwordLength = window.prompt("What do you want the Password length to be? Please");

//Sets the parameters for the password requirements and provides an alert if they are not met.
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please pick a Number between between 8 and 128");
    return
  }

  let includeSpacialChars = window.confirm("Do you want Special characters in your password? Press OK for YES and CANCEL for NO.");
  let includeUpperCase = window.confirm("Do you want Upper Case Letters in your password? Press OK for YES and CANCEL for NO.");
  let inclusedLowerCase = window.confirm("Do you want Lower Case Letters in your password? Press OK for YES and CANCEL for NO.");
  let includeNumbers = window.confirm("Do you want Numbers in your password? Press OK for YES and CANCEL for NO.");
  var optionsSelector = [];

// Pushes the arrays selected by the user to be used in the final password. Also selects the alert if no arrays are included.
  if (includeSpacialChars) {
    optionsSelector.push(specialChars)
  }
  if (includeUpperCase) {
    optionsSelector.push(upperLetters)
  }
  if (inclusedLowerCase) {
    optionsSelector.push(lowerLetters)
  }
  if (includeNumbers) {
    optionsSelector.push(numbers)
  }
  if(optionsSelector.length < 1 ) {
    window.alert("Please choise at least one of the options provided");
    return;
  }
// Randomly selects a string from the selected arrays and adds it to the final password. repeating it till the selected length is obtained.
  for (var i = 0; i < passwordLength; i++) {
    var randArr = optionsSelector[Math.floor(Math.random() * optionsSelector.length)];
    var randChar = randArr[Math.floor(Math.random() * randArr.length)];
    finalPassword += randChar;
  } 
// Returns the output of this function so that it may be used in the wrtiePassword function.
  return finalPassword;
}


// Takes the output of the function generate password and turns it into texts and connects it to the HTML location #password.
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Event starts the write password function.
generateBtn.addEventListener("click", writePassword);