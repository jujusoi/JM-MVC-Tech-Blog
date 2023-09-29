const dashboardButton = document.querySelector('#dashboard-button');

dashboardButton.addEventListener('click', async function() {
    const response = await fetch('/dashboard', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.href = '/dashboard';
    } else {
        return;
    };
});