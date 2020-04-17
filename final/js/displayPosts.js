// container of all posts
const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {

	// container of invidual post
	const post = js.createEl('div', 'post');
	
	// posts in reverse chronological order
	posts.insertBefore(post, posts.firstElementChild);

	// add posts in chronological
	//  posts.appendChild(post);
	
	const tagged = fb.tagText(postData);
	const text = js.createEl('div', 'post-text', tagged);
	post.appendChild(text);

	// add profile image
	const userImage = js.createEl('img', 'post-profile-image');
	if (userInfo.imageURL) {
		userImage.src = userInfo.imageURL;
	} else {
		userImage.src = "img/egg.jpg";
	}
	userImage.onclick = function() {
		location.href = 'profile.html?uid=' + postData.uid;
	};
	post.appendChild(userImage);

	const info = js.createEl('div', 'post-info');
	post.appendChild(info);

	info.appendChild( js.createEl('span', 'author-by', 'by ') );

	// adding the author link 
	const author = js.createEl('a', 'post-author', userInfo.displayName);
	author.href = 'user.html?uid=' + postData.uid;
	info.appendChild(author);


	// adding the permalink
	const link = js.createEl('a', 'permalink', 'Link');
	link.href = 'post.html?id=' + postId;
	info.appendChild(link);





	// post info 

	// author userInfo.displayName
	// date js.formatDate(postData.date) 
	
}