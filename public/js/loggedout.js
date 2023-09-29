const loginButton = document.querySelector('#login-button');

loginButton.addEventListener('click', async function() {
    const response = await fetch('/login', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.href = '/login';
    } else {
        return;
    }
});

document.querySelector('#signup-button').addEventListener('click', async function() {
    const response = await fetch('/sign-up', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.href = '/sign-up';
    } else {
        return;
    }
});