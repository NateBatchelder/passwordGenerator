var lowers = "abcdefghijklkmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "0123456789";
var specials = "!@#$%^&*()_+";

var newPassword = [];

// User prompts

var passwordLengthPrompt = "How many characters would you like in your password (8-128 characters)?";
// TODO add prompts

// Prompt for desired password length
var hasRequestedValidPasswordLength = false;
varpasswordLength = 0;

while (hasRequestedValidPasswordLength == false) {
	passwordLength = parseInt(prompt(passwordLength = parseInt(prompt(passwordLenghtPrompt));

	// if requested length is invalid, request again
	if (isNaN(passwordLength)) {
		alert("Length needs to be a number between 8-128");
	}
	else if (passwordLength < 8 | passwordLenght > 128) {
		alert("Your password needs to be between 8-128 characters!");
	}
	// valid length, so exit loop
	else {
		hasRequestedValidPasswordLength = true;
	}
}

var length = parseInt(prompt("How many characters should be in your password, between 8-128?"))

if (length < 8) {
	alert("Your passwords needs to between 8-128 characters!)")
	prompt("How many characters should be in your password, between 8-128?");
}
else if (length > 8); {

}
lowerCase = confirm("Would you like to include lower case letters?");
upperCase = confirm("Would you like to include upper case letters?");
numbers = confirm("Would you like to include numbers?");
specialCharacters = confirm("Would you like to include special characters?");

// conditional checks to see if variables will be included

// includes lower case
if (lowerCase === true) {
	newPWRD.push(lowers);
}
// includes upper case
if (upperCase === true) {
	newPWRD.push(uppers);
}
// includes numbers
if (numbers === true) {
	newPWRD.push(nums);
}
// includes special characters
if (specialCharacters === true) {
	newPWRD.push(specials);
}

var newPWRDstr = newPWRD.join("");

var password = "";

// password length
for (var i = 0; i < howLong; i++) {
	var randomChar = newPWRDstr.charAt(Math.floor(Math.random() * newPWRDstr.length));
	password = password.concat(genChr);
}
alert("Click 'Generate Password' to receive your new password.");

function generatePWRD() {
	document.getElementById("password").textContent = password;
}

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);