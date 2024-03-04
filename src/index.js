setInterval(() => {
  fetch(window.location.href)
    .then(response => response.text())
    .then(html => console.log(html))
    .catch(err => console.error('Error fetching the HTML source:', err));
}, 4000); // 4000 milliseconds = 4 seconds
