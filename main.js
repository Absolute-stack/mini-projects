const colors = [
  '#B3C12D',
  '#2DC186',
  '#3C2DC1',
  '#C12D68',
  '#918847',
  '#475091',
  '#47F6D7',
  '#4767F6',
  '#F6D647',
  '#EE8DD1',
  '#A41C29',
];

function randomColorGenerator(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const btn = document.querySelector('button');
btn.addEventListener('click', () => {
  document.documentElement.style.setProperty(
    '--color',
    randomColorGenerator(colors)
  );
  const hex = document.querySelector('.hex-code');
  hex.textContent = randomColorGenerator(colors);
});
