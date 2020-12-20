// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var specialCharacters = ["!",'"',"#","$","%","&","'",")","(","*","+",",","-",".","/",":",";","<",">","=","?","@","[","]","^","`","{","}","|","~"];
var charactersConfirmed;
var passwordLength;
var userPassword;


var passwordLength = prompt("How many characters would you like to use?")
  if (passwordLength >= 8 && passwordLength <= 128) {
  var upperCaseConfirm = confirm("Would you like to use Upper Case Letters?");
  var lowerCaseConfirm = confirm("Would you like to use Lower Case Letters?");
  var numbersConfirm = confirm("Would you like to use numbers?");
  var specialCharactersConfirm = confirm("Would you like to use Special Characters?");  
  }

// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
  

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("password");

  passwordText.value = password;
}

  function generatePassword() {
    var charactersConfirmed= ""
    if (upperCaseConfirm === true) {
      charactersConfirmed += upperCase;
    }
    if(lowerCaseConfirm === true) {
      charactersConfirmed += lowerCase;
    }
    if(numbersConfirm === true) {
      charactersConfirmed += numbers;
    }
    if(specialCharactersConfirm === true) {
      charactersConfirmed += specialCharacters;
    }


    if 
    for (i = passwordLength; i <= passwordLength; i++) {
      charactersConfirmed.charAt(Math.floor(Math.random() * charactersConfirmed.length -1));
    }     
  }

  console.log(password);