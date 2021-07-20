// var lowers = ["a", "b"];
// var uppers = ["A", "B", "C", "D"];
// var nums = "0123456789";
// var specials = "!@#$%^&*()_+";

function newPasswordFunction() {

	var newPassword = [];

	// User prompts

	// Prompt for desired password length
	var passwordLengthPrompt = "How many characters would you like in your password (8-128 characters)?";
	var passwordLength = 0;
	var hasRequestedValidPasswordLength = false;

	while (hasRequestedValidPasswordLength == false) {
		passwordLength = parseInt(prompt(passwordLengthPrompt));

		// if requested length is invalid, request again
		if (isNaN(passwordLength)) {
			alert("Length needs to be a number between 8-128");
		}
		else if (passwordLength < 8 | passwordLength > 128) {
			alert("Your password needs to be between 8-128 characters!");
		}
		// valid length, so exit loop
		else {
			hasRequestedValidPasswordLength = true;
			console.log(passwordLength);
		}
	}

	// makes a new var 'newPasswordIncludes'
	var newPasswordIncludesPrompt = "Click 'Ok' to include the values type would you like in your password:"

	// Test for minimum password requirements
	let newPasswordRequires = []

	while (newPasswordRequires.length === 0) {
		// conditional check for 'toInclude'
		lowerCase = confirm("Would you like to include lower case letters?");
		// includes lower case
		if (lowerCase === true) {
			// var newPasswordRequires = [];
			newPasswordRequires.push("a", "b");
			console.log("Password will include lowers")
		}
		upperCase = confirm("Would you like to include upper case letters?");
		// includes upper case
		if (upperCase === true) {
			newPasswordRequires.push("A", "B", "C");
			console.log("Password will include uppers")
		}
		numbers = confirm("Would you like to include numbers?");
		// includes numbers
		if (numbers === true) {
			newPasswordRequires.push("1", "2", "3", "4", "5");
			console.log("Password will include nums")
		}
		specialCharacters = confirm("Would you like to include special characters?");
		if (specialCharacters === true) {
			newPasswordRequires.push("~", "!", "@", "#", "$");
			console.log("Password will include specials");
			console.log("Password may include " + newPasswordRequires)
		}
		if (newPasswordRequires.length === 0) {
			alert("Password does not meet minimum requirments. You must include at leastone character type, numbers, or speical caracters!");
			console.log("Password does not meet minimum requirments. You must include at leastone character type, numbers, or speical caracters!");
		}
	}
	//TODO loop does not return to line 33ish so that values can be included

	var finalPassword = [];

	// password length
	for (var i = 0; i < passwordLength; i++) {
		var newPasswordActual = newPasswordRequires[Math.floor(Math.random() * newPasswordRequires.passwordLength)];
		finalPassword.push(newPasswordActual)
	}

}
// Add event listener to generate button
let btn = document.createElement("generateBtn");
btn.innerHTML = "Generate Password";
document.body.appendChild(btn);