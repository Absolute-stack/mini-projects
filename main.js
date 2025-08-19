let num = 0;

const increaseBtn = document.querySelector('.increase-btn');
const resetBtn = document.querySelector('.reset-btn');
const decreaseBtn = document.querySelector('.decrease-btn');
const number = document.querySelector('p');
number.textContent = num;

increaseBtn.addEventListener('click', increase);
decreaseBtn.addEventListener('click', decrease);
resetBtn.addEventListener('click', reset);

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
