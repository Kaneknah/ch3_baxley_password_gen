var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

function generatePassword() {

  // var upperleters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  // var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  // var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
  // var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

  let option = [["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="],
  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]]

  let password = ""
  let passwordLength = window.prompt("What do you want the Password length to be?")
  // Need for restriction on password length
  let includeSpacialChars = window.confirm("Do you want Special character?")
  let includeUpperCase = window.confirm("Do you want Upper case letters?")
  let inclusedLowerCase = window.confirm("Do you want lower case letters?")
  let includeNumbers = window.confirm("Do you want Numbers?")
  //Need window.alter for restiction

  for (let i = 0; i < passwordLength; i++) {
    let optionSelector = i % option.length
    //Need to be able to handle false Responses
    let randNum = Math.floor(Math.random() * option[optionSelector].length);
    password += option[optionSelector][randNum]


  }

  return password;
}

//generate a random number that will be our factor for special chars Must be less that our password.lenth 
//repeat for each restirction

//create a loop that goes from 0 to passwordLenth
//for each loop, check if you are at a factor of one of your random numbers above
//if you are, generate a new random number that is between 0 and the length of the targeted array
//then go to the targeted array and and grab the ith character (ith the second random number generated)
//add that character to our paassword variable above

generateBtn.addEventListener("click", writePassword);
