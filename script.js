// Assignment Code
var generateBtn = document.querySelector("#generate");

var user;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];


// define the function here
function generatePassword () {
  console.log ("you pressed the button!")

// // 4. display password to the page
//   return "you created a password!"
}






// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// generate password
function generatePassword() {
// ask for user password
length = (prompt ("The length of your password characters: enter a number between 8 and 128"));

if ((length  <8) || (length >128 )) {
  alert ("password lenght invalid, please try again")
  
} else if ((!length  <8) || (!length >128 )) {
  alert ("valid password")
} else {
  lowerCase = (prompt ("Do you want your password to contain a lowercase?"));
  upperCase = (prompt ("Do you want your password to contain a uppercase?"));
  number = (prompt ("Do you want to include a number in your password?"));
  special = (prompt ("Do you want your password to contain a special character?"));
};
  special = (prompt ("Do you want your password to contain a special character?"));
};
