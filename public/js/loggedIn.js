document.querySelector('#logout-button').addEventListener('click', async function(event){
    const response = await fetch('/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
        location.href = '/login';
    } else {
        return;
    }
});