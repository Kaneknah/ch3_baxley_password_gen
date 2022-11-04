// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperleters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

// Write password to the #password input

function generatePassword() {
  //window password

  var passwordLength = input()
  //window password length 8-128 (then validate console.log?)
  if (password.length)
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// window alert with generated password

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// click Red Button
//Prompt = Length "Please Enter the length you want your passwrod to be. Must be between 8 and 128 characters."\
var input = window.prompt("How long would you like your Password to be?")
//if number entered move on

if (input === number) && (inputlength > 8 && < 128)
//if blank, not a number, or two low or high - alert and loop "must enter a number between 8 and 128"
if (input !== number) || (inputlength < 8 || > 128)
window.alert("Sorry, You must enter only a Number between 8 and 128 characters")


var wrongInput = window.alert("Sorry, You must enter only a Number between 8 and 128 characters")
// if correct - log and move on (push)
// Confirm = Want Upper Case "Would you like your password to include Upper Case Letters?""
var inputLower = window.confirm("Would you like your password to include Uper Case Letters in your Password?")
upperleters.push()
//true - log and move on
//false - Log and move on
// confirm = Want Lower Case "would you like your password to include Lower Case Latters?"
var inputLower = window.confirm("Would you like your password to include Lower Case Letters in your Password?")
lowerLetters.push()
//true - log and move on
//false - Log and move on
// confirm = Want symbols Case "Would you like your password to include Symbols?"
var inputSymbol = window.confirm("Would you like your password to include Symbols in your Password?")
if (inputSymbol) {
  symbols.push()

}
//true - log and move on
//false - Log and move on
// confirm = Want numbers  "would you like your password to include nubers?""
var inputNumbers = window.confirm("Would you like your password to include Numbers in your Password?")
numbers.push
  //true - log and move on
  //false - Log and move on

  //capture all logs (push?) and create a new array and display that array in a alert.
