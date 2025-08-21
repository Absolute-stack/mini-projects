const sidebar = document.querySelector('aside');
const toggleBtn = document.querySelector('.toggle-btn');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', toggleSidebar);
closeBtn.addEventListener('click', toggleSidebar);

function toggleSidebar() {
  sidebar.classList.toggle(`show-sidebar`);
}
