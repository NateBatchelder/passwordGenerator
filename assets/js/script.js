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

function generatePassword() {
	let yourNewPassword = '';
	
	var lowerCase = String.fromCharCode(Math.floor(Math.random() * 26) + 97)
	var	upperCase = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
	var number = String.fromCharCode(Math.floor(Math.random() * 10) + 48)
	var symbol = symbols[Math.floor(Math.random() * symbols.length)];
	// create a loop
	

	return yourNewPassword;
}
