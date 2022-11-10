function generatePassword() {

    var upperleters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    var specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "-", "+", "="]
    var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
}

let password = ""
let passwordLength = window.prompt("What do you want the Password length to be?")
let cncludeSpacialChars = window.prompt("do you want special characers?")
let includeUpperCase = window.prompt("Do you want Upper case leters?")
let inclusedLowerCase = windo.prompt("do you want lower case leters?")
let includeNumbers = window.prompt("Do you want Numbers?")



if (includeSpecialChars) {

    for (let i = 1; i < messageArray.length; 1++) {
        let randNum = Math.ceil(Math.random() * passwordLength - 1);
        factorArray.unshift(randNum)


    }


    //generate a random number that will be our factor for special chars Must be less that our password.lenth 
    //repeat for each restirction

    //create a loop that goes from 0 to passwordLenth
    //for each loop, check if you are at a factor of one of your random numbers above
    //if you are, generate a new random number that is between 0 and the length of the targeted array
    //then go to the targeted array and and grab the ith character (ith the second random number generated)
    //add that character to our paassword variable above


}
return passwword;

function askUserForRestirctions(message, ansArray) [
    let response = window.prompt(message)
    ansArray
]

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;



}
//Causes the write password function to be called when event "click" is compelted.
generateBtn.addEventListener("click", writePassword);

//Dry code

//