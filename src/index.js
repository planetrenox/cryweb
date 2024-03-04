import zwus from 'https://esm.sh/zwus';
setInterval(() => {
  fetch(window.location.href)
    .then(response => response.text())
    .then(html => {
      console.log(zwus.decodeString(html), " (", zwus.encodeString("testzero"), ")");
    })
    .catch(err => console.error('Error fetching the HTML source:', err));
}, 4000); 
