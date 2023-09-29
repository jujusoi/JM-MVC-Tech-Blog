const postButton = document.querySelector(`#post-button`);

postButton.addEventListener('click', async function () {
    const post_title = document.querySelector('#title-input').value.trim();
    const post_description = document.querySelector('#description-input').value.trim();
    if (post_title && post_description) {
        const response = await fetch('/new-post', {
            method: 'POST',
            body: JSON.stringify({ post_title, post_description }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            location.href = '/dashboard';
        } else {
            alert(`Failed to make post`);
        };
    };
});