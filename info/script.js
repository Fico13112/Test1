// Fade animations trigger when visible on screen
const fadeElements = document.querySelectorAll('.fade-up, .fade-slide');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
      observer.unobserve(entry.target);
    }
  });
});

fadeElements.forEach(el => {
  el.style.animationPlayState = 'paused';
  observer.observe(el);
});

// Navbar
const header = document.getElementById('header');
const toggleBtn = document.getElementById('navToggle');
let headerVisible = true;

toggleBtn.addEventListener('click', () => {
  headerVisible = !headerVisible;

  header.classList.toggle('hide', !headerVisible);

  // Change toggle icon to indicate action
  toggleBtn.innerHTML = headerVisible
    ? '<i class="fa-solid fa-chevron-up"></i>'
    : '<i class="fa-solid fa-chevron-down"></i>';
});