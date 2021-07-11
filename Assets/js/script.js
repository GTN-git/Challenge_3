// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword () {
  // Password Length Set
 passwordLength = prompt ("Please choose a Password length between 8 and 128")

if (passwordLength === "" || passwordLength === null || passwordLength < 8 || passwordLength > 128) {
  alert ("Invalid Selection please choose a password between 8-128 characters");
  return generatePassword();

} else {
passwordCriteria();
};

function passwordCriteria () {
  var upperCase = window.confirm("Would you like to include UpperCase Characters?");
  
  var lowerCase = window.confirm("Would you like to include LowerCase Characters?");

  var numeric = window.confirm("Would you like to include Numeric Characters?");

  var specialCharacters = window.confirm("Would you like to include Special Characters?");
};

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
