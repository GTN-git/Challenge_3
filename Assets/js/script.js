// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength;
var upperCase;
var lowerCase;
var numeric;
var specialCharacters;

// Write password to the #password input

function generatePassword() {
  // Password Length Set
  passwordLength = parseInt(
    prompt("Please choose a Password length between 8 and 128")
  );

  // Password Logic Parameters User set
  if (
    passwordLength === "" ||
    passwordLength === null ||
    passwordLength < 8 ||
    passwordLength > 128 ||
    isNaN(passwordLength)
  ) {
    alert(
      "Invalid Selection please choose a password between 8-128 characters"
    );
    return;
  } else {
    passwordCriteria();
  }
}

// Password criteria set
function passwordCriteria() {
  upperCase = window.confirm("Would you like to include UpperCase Characters?");

  lowerCase = window.confirm("Would you like to include LowerCase Characters?");

  numeric = window.confirm("Would you like to include Numeric Characters?");

  specialCharacters = window.confirm(
    "Would you like to include Special Characters?"
  );

  // If at least 1 of 4 are true, move on to actual generation of password
  if (!upperCase && !lowerCase && !numeric && !specialCharacters) {
    alert("Please select at least 1 criteria");
    return;
  } else {
    setPassword();
  }
}
// strings to run through for password criteria
function setPassword() {
  var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
  var numerical = "0123456789";
  var special = "!@#$%^&*()";
  var masterString = "";

  if (upperCase) {
    masterString = masterString + upperCharacters;
  }
  if (lowerCase) {
    masterString = masterString + lowerCharacters;
  }

  if (numeric) {
    masterString = masterString + numerical;
  }

  if (specialCharacters) {
    masterString = masterString + special;
  }

  var concatenate = "";
  for (let i = 0; i < passwordLength; i++) {
    var randomNumber = Math.floor(Math.random() * masterString.length);
    var randomCharacter = masterString[randomNumber];
    concatenate = concatenate + randomCharacter;
  }
  var passwordText = document.querySelector("#password");

  passwordText.value = concatenate;
}


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
