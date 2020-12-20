# Password Generator

## Summary
An employee with access to sensitive data wanted a way to randomly generate passwords based on specific criteria. Starter code was given for an HTML and CSS style page, the javascript needed to run in a browswer was necessary to create this project.
<br>
<br>

## Site Picture
![Site](Assets/Images/03-javascript-homework.demo.png)
<br>
<br>

## What Was Done

<br>
<br>

## Code Snippet
```javascript
var passwordLength = prompt("How many characters would you like to use?")
  if (passwordLength >= 8 && passwordLength <= 128) {
  }
  var upperCaseConfirm = confirm("Would you like to use Upper Case Letters?");
  var lowerCaseConfirm = confirm("Would you like to use Lower Case Letters?");
  var numbersConfirm = confirm("Would you like to use numbers?");
  var specialCharactersConfirm = confirm("Would you like to use Special Characters?");  
  
```
This code snippet from script.js set the prompts for the users to go through after they press generate password. The initial "passwordLength" carries the if statement
so users would have to choose between a minimum of 8 characters and a maximum of 128. The following variables were set as confirms which would help determine which 
characters each user would need on a specific basis
<br>
<br>

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [BootStrap](https://getbootstrap.com/)

<br>
<br>

## Deployed Link

[Live Link "Responsive Portfolio"](https://michaelanthonyyy.github.io/password-generator/)

<br>

## Authors

**Michael Medina** 
- [Link to Github](https://github.com/michaelanthonyyy)
- [Link to LinkedIn](https://www.linkedin.com/in/michael-medina-22aa70200?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B311BosSLTMS4JkhAfkX61A%3D%3D)

<br>
<br>

## Aknowledgements

The source code from this project was provided by the UC Berkeley Extension.