// script.js - Optional interactive features

document.addEventListener('DOMContentLoaded', () => {
  console.log('Navy IT Career Guide loaded');

  // Example: highlight current page link
  const links = document.querySelectorAll('nav a');
  const current = window.location.pathname;

  links.forEach(link => {
    if (link.getAttribute('href') === current.split('/').pop()) {
      link.classList.add('underline', 'font-semibold');
    }
  });
});
