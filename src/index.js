import zwus from 'zwus';

fetch(window.location.href)
  .then(response => response.text())
  .then(html => document.write(zwus.decodeToString(html)))
  .catch(err => console.error('Error fetching the HTML source:', err));
