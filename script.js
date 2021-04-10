var passwordLength = 0

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function generatePassword(){
  passwordlengthF();
}

function passwordlengthF () {
  passwordLength = prompt("How long do you want your password to be? 8-128 characters accepted");
  
   if (!passwordLength) {
     return;
   };

   if (passwordLength > 128 || passwordLength < 8) prompt("Your password does not meet the length requirement")

   if (isNaN(passwordLength)) prompt("Please enter a numerical value between 8-128 characters")
}
