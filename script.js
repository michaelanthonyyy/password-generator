// Assignment Code
var generateBtn = document.querySelector("#generate");


var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var numbers = "0123456789";
var specialCharacters = ["!,#$%&')(*+-./:;<>=?@[]^`{}|~"];
var charactersConfirmed=[];
var passwordLength;


// Write password to the #password input


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword) 
  

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
  console.log(password.toString());
}

  function generatePassword() {
    var password=[];
    var passwordLength = prompt("How many characters would you like to use?")
      if (passwordLength >= 8 && passwordLength <= 128) {
      var upperCaseConfirm = confirm("Would you like to use Upper Case Letters?");
      var lowerCaseConfirm = confirm("Would you like to use Lower Case Letters?");
      var numbersConfirm = confirm("Would you like to use numbers?");
      var specialCharactersConfirm = confirm("Would you like to use Special Characters?");  
    }
      var charactersConfirmed= ""
        if (upperCaseConfirm === true) {
        charactersConfirmed = charactersConfirmed.concat(upperCase);
    }
        if(lowerCaseConfirm === true) {
        charactersConfirmed = charactersConfirmed.concat(lowerCase)
    }
        if(numbersConfirm === true) {
        charactersConfirmed = charactersConfirmed.concat(numbers)
    }
        if(specialCharactersConfirm === true) {
        charactersConfirmed = charactersConfirmed.concat(specialCharacters)
    } 
        for (i = 0; i <= passwordLength; i++) {
        var character = charactersConfirmed[Math.floor(Math.random() * charactersConfirmed.length -1)];
        console.log(character);
        password.push(character);
    }
    
    return password;
  }
  
  console.log(password);