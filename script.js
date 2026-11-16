const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.main-nav');
const yearEl = document.getElementById('year');
const estimateForm = document.getElementById('estimateForm');
const formStatus = document.querySelector('.form-status');

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (estimateForm && formStatus) {
  estimateForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(estimateForm);
    const name = formData.get('name') || 'there';

    formStatus.textContent = `Thanks, ${name}! Your request has been received. We’ll be in touch soon.`;
    estimateForm.reset();
  });
}
