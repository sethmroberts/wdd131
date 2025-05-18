// Toggle Menu
const menuButton = document.getElementById('menuToggle');
const navLinks = document.querySelector('nav ul');

function toggleMenu() {
  navLinks.classList.toggle('hide');
}
menuButton.addEventListener('click', toggleMenu);

// Resize handler
function handleResize() {
  if (window.innerWidth > 1000) {
    navLinks.classList.remove('hide');
  } else {
    navLinks.classList.add('hide');
  }
}
window.addEventListener('resize', handleResize);
window.addEventListener('load', handleResize);

// Image Modal
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', (event) => {
  const img = event.target.closest('img');
  if (!img) return;

  const src = img.getAttribute('src').split('-')[0] + '-full.jpeg';
  const alt = img.getAttribute('alt');

  const modal = document.createElement('dialog');
  modal.innerHTML = `
    <img src="${src}" alt="${alt}">
    <button class="close-viewer">X</button>
  `;
  modal.classList.add('viewer');
  document.body.appendChild(modal);

  modal.showModal();

  modal.querySelector('.close-viewer').addEventListener('click', () => modal.close());
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.close();
  });

  modal.addEventListener('close', () => modal.remove());
});
