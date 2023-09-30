const logLogin = document.querySelector('#sign-in-button');
const userInput = document.querySelector('#user-form');
const passInput = document.querySelector('#password-form');

const noReset = (event) => {
    event.preventDefault();
};

userInput.addEventListener('submit', noReset);
passInput.addEventListener('submit', noReset);

logLogin.addEventListener('click', async function() {
    const username = document.querySelector('#user-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();

    if (username && password) {
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            location.href = '/home';
        } else {
            alert(`Invalid username or password!`);
        };
    };
});


