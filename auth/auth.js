/*
	const variable can't change
	document.getElementById gets a refence to the element in html
*/

const loginEmail = document.getElementById("login-email");
const loginPassword = document.getElementById("login-password");
const loginButton = document.getElementById("login-button");
const loginMessage = document.getElementById("login-message");

/*
	event listener 
	listening user input, mouse clicks or keyboard presses

	onclick captures a click event
*/

loginButton.onclick = function() {
	console.log(loginEmail.value, loginPassword.value);

	loginMessage.textContent = "You logged in.";
};


