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
// prompts to include values in password
	var lowerCase = confirm("Would you like to include lower case letters?");
	var upperCase = confirm("Would you like to include upper case letters?");
	var numbers = confirm("Would you like to include numbers?");
	var specialCharacters = confirm("Would you like to include special characters?");
// establishes variable values
	var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	var lowers = "abcdefghijklkmnopqrstuvwxyz";
	var numbers = "0123456789";
	var specials = "~!@#$%^&*(){}[]<>";
	var selected = "";
// conditional checks to see if variables will be included
	// includes upper case
	if(upperCase === true) {
		selected = selected + uppers;
	}
	// includes lower case
	if(lowerCase === true) {
		selected = selected + lowers;
	}
	// includes numbers
	if(numbers === true) {
		selected = selected = numbers;
	}
	// includes special characters
	if(specialCharacters === true) {
		selected = selected = specials;
	}
	// conditional if no variables (blank?!) are selected
	if(
		upperCase == false &&
		lowerCase == false &&
		characters == false &&
		numbers == false
	) {
		// passwords can't be blank! - friendly script to user
		alert("You must select at least one type of character value to procede.");
		generatePassword();
	}
	// password length
	for(var i = 0; i < howLong; i++){
		var randomChar = Math.floor(math.random() * selected.length);
		finalPass = finalPass + selected[randomChar];
	}
	// returns the value of the number of characters theh password will include
		return finalPass

	}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);