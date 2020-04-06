const publishText = js.getEl('publish-text');
const publishButton = js.getEl('publish-button');
const postImageInput = js.getEl("post-image-input");

publishText.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

publishButton.addEventListener('click', publishPost);

function publishPost() {
	const uid = fb.getUID();

	const file = postImageInput.files[0];

	if (file) {
		fb.publishPost(uid, publishText.value, file);
	} else {
		fb.publishPost(uid, publishText.value);
	}
	
	publishText.value = ""; // reset textarea
}
