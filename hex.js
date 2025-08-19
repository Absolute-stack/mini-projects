const btn = document.querySelector('.hex-btn');
btn.addEventListener('click', () => {
  document.documentElement.style.setProperty('--color', colorGenerator());
  const hex = document.querySelector('.hex-code');
  hex.textContent = colorGenerator();
});

function colorGenerator() {
  return `#${Math.floor(Math.random() * 999999)}`;
}
