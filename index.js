let button = document.getElementById('start');
let body = document.querySelector('body');

button.addEventListener('click', function() {
  button.style.display = 'none';
  body.style.backgroundColor = 'lightblue';
});