// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// creates the password given the selected variables
function generatePassword() {
	var finalPass = "";
	var howLong = prompt("Between 8 and 128, how long will your password be?", "(Pick a number between 8 and 128.)");
	
if(howLong <8 || howLong >128) {
	alert("Please pick a number between 8 and 128.")
	generatePassword();
}
else {

	var lowerCase =
	var upperCase =
	var numbers =
	var specialCharacters =

	var uppers 
	var lowers 
	var numbers 
	var specials 
	var selected = "";
}
	var yourNewPassword = '';

	// rewrite this function without CharCode
	
	var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
	var	upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
	var number = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
	var symbol = special[Math.floor(Math.random() * special.length)];
	// create a loop
	

	return yourNewPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);