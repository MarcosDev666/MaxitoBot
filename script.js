const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(isOpen));
  menu.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  menu.textContent = isOpen ? '×' : '☰';
});
nav.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Abrir menú');
    menu.textContent = '☰';
  }
});
document.querySelector('#year').textContent = new Date().getFullYear();
