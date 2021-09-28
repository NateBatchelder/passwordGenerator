var lowers = "abcdefghijklmnopqrstuvwxyz";
var uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var nums = "1234567890";
var specials = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~\"";

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

	// Test for minimum password requirements
	let newPasswordPossibleCharacters = []

	while (newPasswordPossibleCharacters.length === 0) {
		// conditional check for 'toInclude'
		lowerCase = confirm("Would you like to include lower case letters?");
		// includes lower case
		if (lowerCase === true) {
			// includes lowers
			newPasswordPossibleCharacters.push(lowers);
			console.log("Password will include lowers")
		}
		upperCase = confirm("Would you like to include upper case letters?");
		// includes uppers
		if (upperCase === true) {
			newPasswordPossibleCharacters.push(uppers);
			console.log("Password will include uppers")
		}
		numbers = confirm("Would you like to include numbers?");
		// includes nums
		if (numbers === true) {
			newPasswordPossibleCharacters.push(nums);
			console.log("Password will include nums")
		}
		specialCharacters = confirm("Would you like to include special characters?");
		// includes specials
		if (specialCharacters === true) {
			newPasswordPossibleCharacters.push(specials);
			console.log("Password will include specials");
		}
		if (newPasswordPossibleCharacters.length === 0) {
			alert("Password does not meet minimum requirments. You must include at leastone character type, numbers, or speical caracters!");
			console.log("Password does not meet minimum requirments. You must include at leastone character type, numbers, or speical caracters!");
		}
	}
	newPasswordPossibleCharacters = newPasswordPossibleCharacters.join('');

	console.log(newPasswordPossibleCharacters);

	var finalPassword = [];

	// password length
	for (var i = 0; i < passwordLength; i++) {
		let randomIndex = Math.floor(Math.random() * newPasswordPossibleCharacters.length);

		let newPasswordCharacter = newPasswordPossibleCharacters[randomIndex];

		finalPassword.push(newPasswordCharacter)
	}

	finalPassword = finalPassword.join('');

	document.getElementById("password").innerHTML = finalPassword;
}