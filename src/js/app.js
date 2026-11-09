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

// El progreso pertenece a este navegador; no modifica la configuración de Discord.
const steps = [...document.querySelectorAll('[data-step]')];
const progress = document.querySelector('.progress-track');
const progressFill = document.querySelector('#progress-fill');
const progressCount = document.querySelector('#progress-count');
const storageKey = 'maxito-onboarding';
let savedSteps = [];
try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '[]');
  if (Array.isArray(saved)) savedSteps = saved;
} catch (_) { /* La guía sigue funcionando si el almacenamiento no está disponible. */ }
steps.forEach(step => { step.checked = savedSteps.includes(step.dataset.step); });
function updateProgress() {
  const completed = steps.filter(step => step.checked).map(step => step.dataset.step);
  progressCount.textContent = `${completed.length} / ${steps.length}`;
  progressFill.style.width = `${completed.length / steps.length * 100}%`;
  progress.setAttribute('aria-valuenow', String(completed.length));
  try { localStorage.setItem(storageKey, JSON.stringify(completed)); } catch (_) { /* almacenamiento opcional */ }
}
steps.forEach(step => step.addEventListener('change', updateProgress));
document.querySelector('#reset-progress').addEventListener('click', () => {
  steps.forEach(step => { step.checked = false; });
  updateProgress();
});
updateProgress();
