// container of all posts
const posts = js.getEl('posts');

function createPost(postData, userInfo, postId) {

	// container of invidual post
	const post = js.createEl('div', 'post');
	
	// posts in reverse chronological order
	posts.insertBefore(post, posts.firstElementChild);

	// add posts in chronological
	//  posts.appendChild(post);
	
	const text = js.createEl('div', 'post-text', postData.text);
	post.appendChild(text);

	// post info 

	// author userInfo.displayName
	// date js.formatDate(postData.date) 
	
}