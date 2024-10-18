// script.js

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(this.getAttribute('href'));
        document.querySelectorAll('section').forEach(section => section.style.display = 'none');
        targetSection.style.display = 'block';
    });
});

// Initially show only the home section
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('section').forEach(section => section.style.display = 'none');
    document.querySelector('#home').style.display = 'block';
});
