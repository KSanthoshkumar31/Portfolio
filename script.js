// Scroll reveal
const faders = document.querySelectorAll('.fade-in');
const navbar = document.querySelector('.navbar');



function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  faders.forEach(el => {
    const boxTop = el.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      el.classList.add('show');
    }
  });
}
function toggleDetails(id) {
  const element = document.getElementById(id);
  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
  }
}
window.addEventListener('mousemove', (e) => {
  if (e.clientY < 50) { // if mouse near top
    navbar.style.top = '0'; // show navbar
  } else {
    navbar.style.top = '-100px'; // hide navbar
  }
});
// Hide all sections except the selected one
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').replace('#', '');
    document.querySelectorAll('section').forEach(sec => {
      sec.style.display = sec.id === targetId ? 'flex' : 'none';
    });
    // Scroll to top for better UX
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Show home section by default on page load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section').forEach(sec => {
    sec.style.display = sec.id === 'home' ? 'flex' : 'none';
  });
});
function showFullProject(id) {
  // You can expand this to show a modal, redirect, or show more details
  alert('Show full details for ' + id);
}



window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
