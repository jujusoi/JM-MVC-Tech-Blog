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

const editButtons = document.querySelectorAll('.edit-button');

editButtons.forEach((button) => {
    button.addEventListener('click', async function() {
        const post = button.getAttribute('data-post');
        const description = document.querySelector(`#description-${post}`).textContent;
        const title = document.querySelector(`#title-${post}`).textContent;
        if (description && title) {
            document.querySelector('#modal-title-input').value = title;
            document.querySelector('#modal-description-input').value = description;

            document.querySelector('#edit-save-button').addEventListener('click', async function() {
                const newTitle = document.querySelector('#modal-title-input').value.trim();
                const newDescription = document.querySelector('#modal-description-input').value.trim();
                if (newTitle && newDescription) {
                    const response = await fetch(`/api/posts/${post}`, {
                    method: 'PUT',
                    body: JSON.stringify({ post_title: newTitle, post_description: newDescription }),
                    headers: { 'Content-Type': 'application/json' },
                    });
                    if (response.ok) {
                        const newResp = await fetch(`/dashboard`, {
                            method: 'GET',
                            headers: { 'Content-Type': 'application/json' },
                        });
                        if (newResp.ok) {
                            location.href = '/dashboard';
                        } else {
                            alert(`Failed to edit post`);
                        }
                    } else {
                        alert(`Failed to edit post`);
                    };
                };
            });
        };
    });
});

const deleteButtons = document.querySelectorAll('.delete-button');

deleteButtons.forEach((button) => {
    button.addEventListener('click', async function() {
        const post = button.getAttribute('data-post');
        if (post) {
            const response = await fetch(`/api/posts/${post}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            if (response.ok) {
                location.href = '/dashboard';
            } else {
                alert(`Failed to delete post`);
            };
        } else {
            alert(`Failed to delete post`);
        }
    });
});
