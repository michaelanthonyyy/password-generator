// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
// declare arrays for each character set (multiple arrays or one nested array)
// arrays should be made to include options for capital letters, lower case, numbers, and special characters
// these arrays are for possible input choices for user when they go through following prompts


// create prompts that set presidence for remainder of code. prompts should be length > lower > upper > numbers > special characters
// this is going to be done using prompt functions. each character type has its own prompt
// this is done in order to gather information to generate the result of each users choice 
// ***At least one prompt must be chosen to proceed*** if not set alert to select at least one prompt


// using results of the prompt create password
// functions and conditional statements are used to select between prompt answers and math.random is used to randomize password
// this creates a password that is randomly generated between length and selected characters


//  display generated password as alert or print to page .. or both?
// using prompt or window.print() 
// done to give user their generated password based on their own selected criteria

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
