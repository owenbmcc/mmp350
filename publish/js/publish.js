const publishText = js.getEl('publish-text');
const publishButton = js.getEl('publish-button');

publishText.addEventListener('keyup', function(event) {
	if (event.which == 13) {
		publishPost();
	}
});

publishButton.addEventListener('click', publishPost);

function publishPost() {
	const uid = fb.getUID();
	fb.publishPost(uid, publishText.value);
	publishText.value = "";
}
