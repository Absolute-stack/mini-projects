let num = 0;

const number = document.querySelector('p');
const container = document.querySelector('.btn-container');

number.textContent = num;

// Single event listener using event delegation
container.addEventListener('click', function (e) {
  if (e.target.classList.contains('increase-btn')) {
    increase();
  } else if (e.target.classList.contains('decrease-btn')) {
    decrease();
  } else if (e.target.classList.contains('reset-btn')) {
    reset();
  }
});

function increase() {
  num = num + 1;
  return (number.textContent = num);
}

function decrease() {
  num = num - 1;
  return (number.textContent = num);
}

function reset() {
  num = 0;
  return (number.textContent = num);
}
