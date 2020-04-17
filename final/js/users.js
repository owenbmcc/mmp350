const usersDiv = js.getEl("users");
fb.getUsers(displayUser);

function displayUser(uid, displayName, bio, imageURL, userInfo) {
	
	// user container element
	const userDiv = js.createEl('div', 'user');
	usersDiv.appendChild(userDiv);

	if (imageURL) {
		const userImage = js.createEl('img', 'user-image');
		userImage.src = imageURL;
		userDiv.appendChild(userImage);
		userImage.onclick = function() {
			location.href = 'user.html?uid=' + uid;
		};
	}

	// display name
	const userName = js.createEl('a', 'user-name', displayName);
	userName.href = 'user.html?uid=' + uid;
	userDiv.appendChild(userName);

	const profileLink = js.createEl('a', 'user-profile-link', 'View Profile');
	profileLink.href = 'profile.html?uid=' + uid;
	userDiv.appendChild(profileLink);

	if (bio) {
		const bioDiv = js.createEl('div', 'user-bio', bio);
		userDiv.appendChild(bioDiv);
	}

}