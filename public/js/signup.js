const signInButton = document.querySelector('#sign-in-button');
const userForm = document.querySelector('#user-form')
const userInput = document.querySelector('#user-input')
const passForm = document.querySelector('#password-form')
const passInput = document.querySelector('#password-input')

signInButton.addEventListener('click', async function() {
    const username = userInput.value.trim();
    const password = passInput.value.trim();
    
    if (username && password) {
        const response = await fetch('/sign-up', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        if (response.ok) {
            location.href = '/home';
        } else {
            alert(`Could not make a new account`);
        };
    };
});