var passwordLength = 0
var blank ="";
var upperCaseSet ="ABCDEJGHIJKLMOPQRSTUVWXYZ"
var lowerCaseSet ="abcdefghijklmopqrstuvwxyz"
var numberSet ="0123456789"
var symbolSet = "!@#$%^&*()+"
var initialPassword ="";
var pass =""
var upper= ''
var allowed= ''


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  getCriteria();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



function getCriteria(){
  passwordlengthF();
}

function generatePassword(){
  // includeUpper();
  //  includeLower();
  //  includeSpecial();
  //  includeNumbers();

  var newUpper =confirm("Include uppercase characters? Press 'OK' to Include and 'Cancel' to exclude")
   var newLower =confirm("Include lowercase characters? Press 'OK' to Include and 'Cancel' to exclude")
   var newNumber =confirm("Include Numbers? Press 'OK' to Include and 'Cancel' to exclude")
   var newSymbol =confirm("Include Symbols? Press 'OK' to Include and 'Cancel' to exclude")
//  console.log(newUpper)
  var allowed = ''
  if (newUpper === true){
      allowed += upperCaseSet
      console.log(allowed)
        
  }
  if (newNumber === true){
    allowed += numberSet
    console.log("==========")
    console.log(allowed)
    console.log("==========")
}
  if (newLower === true){
    allowed += lowerCaseSet
    console.log("+++++++++++")
    console.log(allowed)
    console.log("+++++++++++")
  }
  if (newSymbol === true){
    allowed += symbolSet
    console.log("+++++++++++")
    console.log(allowed)
    console.log("+++++++++++")
  }

  //allowed += lowerCaseSet
  //allowed += numberSet


  // For loop that generates random password based on lenth of passwordLength. It uses math.random to pull a random character out of the string and then add it to the password.
  
   var pass ='';
   for (let i = 0; i < passwordLength; i++){
      var nextChar = Math.floor(Math.random() * allowed.length);
      //console.log("+++5+++")
      //console.log(allowed)
      pass += allowed[nextChar]
      console.log(pass)
      //console.log("underhere")
     // console.log(allowed)
     // console.log("abovehere")
   }
   return pass;
   
}
//console.log(generatePassword())
// function createpassword(upper,lower,special,numbers)
 



function passwordlengthF () {
  passwordLength = prompt("How long do you want your password to be? 8-128 characters accepted");
  
   if (!passwordLength) {
     return;
   };

    if (passwordLength > 128 || passwordLength < 8) prompt("Your password does not meet the length requirement")

   if (isNaN(passwordLength)) prompt("Please enter a numerical value between 8-128 characters")

    
   parseInt('passwordLength', 10)
   console.log(passwordLength)
  }
  


  

  


// ALL OF THE CRITERIA PROMPTS

//  function includeUpper(){
//    var upper = confirm("Would you like to Include uppercase letters?")
//      return upper
//  }

// function includeLower(){
//   lower = confirm("Would you like to include lowercase letters?")
//     return lower
// }
// function includeSpecial(){
//   special = confirm("Would you like to include special characters?")
//     return special
// }
// function includeNumbers(){
//   numbers = confirm("Would you like to include numbers?")
//     return numbers
// }



// //Randomizing
//  function makeRandomUpper (){
//    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
//  }
// // makeRandomUpper();
// console.log(makeRandomUpper())

// function makeRandomLower (){
//   return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
// }
// console.log(makeRandomLower())

// function makeRandomSymbol (){
//   var symbols ="!@#$%^&*()+{}:";
//   return symbols[Math.floor(Math.random() * symbols.length)] 
// }
// console.log(makeRandomSymbol())

// function makeRandomNumber (){
//   return (Math.floor(Math.random() * 10));
// }

// console.log(makeRandomNumber())
