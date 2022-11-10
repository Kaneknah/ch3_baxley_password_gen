//seting out needed variables
var generateBtn = document.querySelector("#generate");
// this first attempt did not allow for the option to not select a option
//var upperleters = "ABCDEFGHIKLMNOPQRSTUVWXYZ"
//var lowerLetters = "abcdefghijklmnopqrstuvwxyz"
//var specialChars = "!@#$%^&*_-+="
//var numbers = "0123456789"




var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLeters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]


//Function for creating the password from user inputs
function generatePassword() {
  let password = ""
  let passwordLength = window.prompt("What do you want the Password length to be?");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Please pick a Number between between 8 and 128")
    return
  }
  let includeSpacialChars = window.confirm("Do you want Special character? Confirm ")
  let includeUpperCase = window.confirm("Do you want Upper case letters?")
  let inclusedLowerCase = window.confirm("Do you want lower case letters?")
  let includeNumbers = window.confirm("Do you want Numbers?")

  var optionsSelector = []

  if (includeSpacialChars === true) {
    optionsSelector.push(includeSpacialChars)
  }
  if (includeUpperCase === true) {
    optionsSelector.push(includeUpperCase)
  }
  if (inclusedLowerCase === true) {
    optionsSelector.push(inclusedLowerCase)
  }
  if (includeNumbers === true) {
    optionsSelector.push(includeNumbers)
  }
}
//Need window.alter for restiction

// for (let i = 0; i < passwordLength; i++) {
// let optionSelector = i % option.length
//Need to be able to handle false Responses
// let randNum = Math.floor(Math.random() * option[optionSelector].length);
// password += option[optionSelector][randNum]
//}
//return password;
var character = function (password, passwordLength, checking, string, range) {
  if (checking === true && password.length < passwordLength) {
    var randdom = Math.floor(Math.random() * range);
    password += Array(random);



  }
  return password
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