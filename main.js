const container = document.querySelector('.hero-container');
const modal = document.querySelector('.modal-container');

container.addEventListener('click', (e) => {
  console.log(e.target.classList);
  if (e.target.classList.contains('open-btn')) {
    modal.classList.add('show-modal');
  } else if (e.target.classList.contains('close-btn')) {
    modal.classList.remove('show-modal');
  }
});
