// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numberChar = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Write password to the #password input

function writePassword() {

    // generate password

    function randomGenerator(maxNum) {

        return Math.floor(Math.random() * maxNum);

    }

    function generatePassword() {

        let lowerCase;

        let upperCase;

        let number;

        let special;

        let pswLength;

        length = (prompt("The length of your password characters: enter a number between 8 and 128"));

        if ((length < 8) || (length > 128)) {

            alert("password lenght invalid, please try again");

            generatePassword();

        } else if ((!length < 8) || (!length > 128)) {

            pswLength = length;

            alert("valid password");

        }

        if (confirm("Do you wan't to include lowercase in your password? Press 'ok' for yes and 'cancel' for no") == true) {

        lowerCase = true;

        } else {

        lowerCase = false;

        }

        if (confirm("Do you wan't to include uppercase in your password? Press 'ok' for yes and 'cancel' for no") == true) {

        upperCase = true;

        } else {

        upperCase = false;

        }

        if (confirm("Do you wan't to include number(s) in your password? Press 'ok' for yes and 'cancel' for no") == true) {

        number = true;

        } else {

        number = false;

        }

        if (confirm("Do you wan't to include special characters in your password? Press 'ok' for yes and 'cancel' for no") == true) {

        special = true;

        } else {

        special = false;
        }

        var allCharacters = [];

        let generatedOutcome = "";

        if (upperCase) {

            allCharacters = allCharacters.concat(upperCaseChar);

            var outcome = randomGenerator(upperCaseChar.length);

            generatedOutcome += upperCaseChar[outcome];

        }

        if (lowerCase) {

            allCharacters = allCharacters.concat(lowerCaseChar);

            var outcome = randomGenerator(lowerCaseChar.length);

            generatedOutcome += lowerCaseChar[outcome];

        }

        if (number) {

            allCharacters = allCharacters.concat(numberChar);

            var outcome = randomGenerator(numberChar.length);

            generatedOutcome += numberChar[outcome];

        }

        if (special) {

            allCharacters = allCharacters.concat(specialChar);

            var outcome = randomGenerator(specialChar.length);

            generatedOutcome += specialChar[outcome];

        }

        for (var i = 0; i < parseInt(pswLength); i++) {

            var outcome = randomGenerator(lowerCaseChar.length);

            generatedOutcome += allCharacters[i];

        }

      return generatedOutcome;

    }

    let password = generatePassword();

    var passwordText = document.querySelector("#password");
    

    passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)