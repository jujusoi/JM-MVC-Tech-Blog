const homeButton = document.querySelector('#home-button');
const loginButton = document.querySelector('#login-button');
const dashboardButton = document.querySelector('#dashboard-button');

homeButton.addEventListener('click', function() {
    location.href = '/home';
});

loginButton.addEventListener('click', function() {
    location.href = '/login';
});

dashboardButton.addEventListener('click', function() {
    location.href = '/dashboard';
});