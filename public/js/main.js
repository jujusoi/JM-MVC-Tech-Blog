const homeButton = document.querySelector('#home-button');

homeButton.addEventListener('click', async function() {
    const response = await fetch('/home', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.href = '/home';
    }
});
