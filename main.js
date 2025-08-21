const openModalBtn = document.querySelector('button');
const closeBtn = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');

openModalBtn.addEventListener('click', () => {
  modal.toggleAttribute('hidden');
});

closeBtn.addEventListener('click', () => {
  modal.setAttribute('hidden', '');
});
