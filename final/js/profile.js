// get user profile id
const profileUID = location.search.split('=')[1];
fb.getUserProfile(profileUID);

const profileName = js.getEl("profile-display-name");
const profileBio = js.getEl("profile-bio");
const profileButton = js.getEl("update-profile");

const profileImage = js.getEl("profile-image");
const profileImageInput = js.getEl("profile-image-input");
const profileImageButton = js.getEl("update-profile-image");

function displayProfile(userName, userInfo) {

	// display the user profile name
	profileName.value = userName;

	// add other other fields

	if (userInfo.bio) {
		profileBio.value = userInfo.bio;
	}

	if (userInfo.imageURL) {
		profileImage.src = userInfo.imageURL;
	}

}

profileButton.onclick = function() {
	// helper: user id, field name 
	fb.updateProfile(profileUID, 'displayName', profileName.value);
	fb.updateProfile(profileUID, 'bio', profileBio.value);
};


function profileLoggedIn(uid) {
	if (uid == profileUID) {
		profileButton.style.display = 'block';
	}
}

// upload a profile image
profileImageButton.onclick = function() {

	const file = profileImageInput.files[0];

	if (file) {
		fb.uploadImage(file, profileUID, 'profile-image')
			.then(addProfileImage);
	}
};

function addProfileImage(imageURL) {
	profileImage.src = imageURL;
	fb.updateProfile(profileUID, 'imageURL', imageURL);
}