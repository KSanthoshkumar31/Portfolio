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



window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
