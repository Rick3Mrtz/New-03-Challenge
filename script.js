// Assignment Code
let generateBtn = document.querySelector("#generate");

function generatePassword() {

let alphaUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

let alphaLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

let arrayNumbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

let arraySymbols = ['!', '#', '$', '%', '&', '*', '?', '@', '_', '/']

let resultArray = []

let userArray = []

let charLength = window.prompt ("Choose your Password character length \n*Length must be 8-128 characters*\n");


let lowerCase = window.confirm('Would you like to include lowercase letters in your password?');

let upperCase = window.confirm("How 'bout some uppercase letters?");

let numbers = window.confirm('I know you want some numbers too... am I right?');

let symbols = window.confirm('You lookin fancy enough for some symbols too huh?');

let dumb = alert("🚨🚨AINT NO ONE HACKING YOU NO MORE!!!🚨🚨 \n💪🏽 HERE'S YOUR NEW STRONG PASSWORD FAM!! 💪🏽 \n 😤😤😤😤😤😤😤😤😤😤😤😤😤😤😤😤😤😤😤😤  ")



if (lowerCase === true) {
  resultArray = resultArray.concat(alphaLower);
}

if (upperCase === true) {
  resultArray = resultArray.concat(alphaUpper);
}

if (numbers === true) {
  resultArray = resultArray.concat(arrayNumbers);
}

if (symbols === true) {
  resultArray = resultArray.concat(arraySymbols);
} 


for (var i = 0; i < charLength; i++) {
  userArray.push(resultArray[Math.floor(Math.random() * resultArray.length)])

}

  return userArray.join('');


}
  

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

