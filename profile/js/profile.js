const profileUID = location.search.split('=')[1];

const displayName = js.getEl('display-name');
const bioInput = js.getEl('profile-bio');
const updateButton = js.getEl('update-profile');

fb.getUserProfile(profileUID);

function displayProfile(userName, userInfo) {
	console.log(userInfo);

	displayName.value = userName;

	if (userInfo.bio) {
		bioInput.value = userInfo.bio;
	}
}

updateButton.onclick = function() {

	// arguments: user id, key, value 
	
	fb.updateProfile(profileUID, 'displayName', displayName.value);
	fb.updateProfile(profileUID, 'bio', bioInput.value);
};

