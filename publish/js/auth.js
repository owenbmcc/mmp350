/*
	const variable can't change
	document.getElementById gets a refence to the element in html
*/

const loginEmail = document.getElementById("login-email");
const loginPassword = js.getEl("login-password");
const loginButton = js.getEl("login-button");
const loginMessage = js.getEl("login-message");
const userName = js.getEl("user-name");

/*
	event listener 
	listening user input, mouse clicks or keyboard presses

	onclick captures a click event
*/

loginButton.onclick = function() {
	fb.login(loginEmail.value, loginPassword.value);
};


// adds login for hitting enter
loginPassword.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		fb.login(loginEmail.value, loginPassword.value);
	}
});

function onError(errorMessage) {
	loginMessage.textContent = errorMessage;
}

function userLoggedIn(uid, displayName) {
	userName.textContent = "Welcome " + displayName + ".";
}
