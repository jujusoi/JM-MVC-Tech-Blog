
document.querySelector('#post-sect').addEventListener('click', async (event) => {
    const target = event.target;
    if (target.hasAttribute('data-postid')) {
        const id = target.getAttribute('data-postid');
        const response = await fetch (`/home/posts/${id}`, {
            method: 'GET',
            contentType: 'application/json',
        });
        if (response.ok) {
            location.href = `/home/posts/${id}`;
        };
    };
});