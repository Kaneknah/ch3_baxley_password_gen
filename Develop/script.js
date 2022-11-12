
var generateBtn = document.querySelector("#generate");
var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//Function for creating the password from user inputs
function generatePassword() {
  var finalPassword = "";
  var passwordLength = window.prompt("What do you want the Password length to be?");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please pick a Number between between 8 and 128");
    return
  }

  let includeSpacialChars = window.confirm("Do you want Special character? Confirm ");
  let includeUpperCase = window.confirm("Do you want Upper case letters?");
  let inclusedLowerCase = window.confirm("Do you want lower case letters?");
  let includeNumbers = window.confirm("Do you want Numbers?");
  var optionsSelector = [];

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

  for (var i = 0; i < passwordLength; i++) {
    var randArr = optionsSelector[Math.floor(Math.random() * optionsSelector.length)];
    var randChar = randArr[Math.floor(Math.random() * randArr.length)];
    finalPassword += randChar;
  } 

  return finalPassword;
}


// Takes the output of the fucntion generate password and turns it into texts and connects it to the HTML location #password
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//generate a random number that will be our factor for special chars Must be less that our password.lenth 
//repeat for each restirction

//create a loop that goes from 0 to passwordLenth
//for each loop, check if you are at a factor of one of your random numbers above
//if you are, generate a new random number that is between 0 and the length of the targeted array
//then go to the targeted array and and grab the ith character (ith the second random number generated)
//add that character to our paassword variable above

// Event starts the write password function
generateBtn.addEventListener("click", writePassword);