let button = document.getElementById('start');
let body = document.querySelector('body');
let canvas = document.querySelector('canvas');

button.addEventListener('click', function() {
  button.style.display = 'none';
  canvas.style.display = 'block';
  body.style.backgroundColor = 'lightblue';
});

