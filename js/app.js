// Mobile menu function//
const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');

menuBtn.addEventListener('click', () => {
  mainNav.classList.add('show');
});

mainNav.addEventListener('click', (event) => {
  if (event.target.tagName === 'A' || event.target.tagName === 'I') {
    mainNav.classList.remove('show');
  }
});
