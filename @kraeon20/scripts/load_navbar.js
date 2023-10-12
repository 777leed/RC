// Load navbar.html into the current page
fetch('components/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.body.insertAdjacentHTML('afterbegin', data);

    })
    .catch(error => console.error('Error:', error));
