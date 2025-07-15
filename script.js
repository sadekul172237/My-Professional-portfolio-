// Scroll animation on section
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.1,
};
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Navbar link active on scroll
window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll('.nav-links a');
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop + 100 &&
      section.offsetTop + section.offsetHeight > fromTop + 100
    ) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});

// Scroll to top button
const topBtn = document.createElement('button');
topBtn.innerText = '↑';
topBtn.className = 'top-btn';
document.body.appendChild(topBtn);

topBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    topBtn.style.display = 'block';
  } else {
    topBtn.style.display = 'none';
  }
});

// Dark mode toggle
const toggleBtn = document.createElement('button');
toggleBtn.innerText = '🌙';
toggleBtn.className = 'dark-toggle';
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  toggleBtn.innerText = document.body.classList.contains('dark') ? '☀️' : '🌙';
});