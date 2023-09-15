const commentButton = document.querySelector("#comment-button");
const commentInput = document.querySelector("#comment-input"); 
const postTitle = document.querySelector('#post-title');

commentButton.addEventListener('click', async function() {
    const comment_description = commentInput.value.trim();
    const post_id = postTitle.getAttribute(`data-postid`);

    if (comment_description && post_id) {
        const response = await fetch(`/home/posts/${post_id}`, {
            method: 'POST',
            body: JSON.stringify({ comment_description, post_id }),
            headers: {'Content-Type': 'application/json'},
        });
        if (response.ok) {
            location.replace(`/home/posts/${post_id}`);
        } else {
            alert(`Error in posting comment`);
        }
    }
});