const toggleBtn = document.querySelector('.toggle-btn');
const navPhone = document.querySelector('.nav-phone'); // Move this outside so it's accessible

toggleBtn.addEventListener('click', () => {
  navPhone.toggleAttribute('hidden');
});

window.addEventListener('resize', visibility);

function visibility() {
  if (window.innerWidth >= 901) {
    navPhone.setAttribute('hidden', '');
  }
}
