const hamburg = document.getElementById('hamburG');
const nav = document.getElementById('nav');

hamburg.addEventListener('click', () => {
  nav.classList.toggle('active');
});