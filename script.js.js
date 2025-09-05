// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth', block:'start'});
      // close nav on mobile
      const navList = document.getElementById('nav-list');
      if(window.innerWidth <= 800) navList.classList.remove('open');
    }
  });
});

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', ()=>{
  navList.classList.toggle('open');
});

// year
document.getElementById('year').textContent = new Date().getFullYear();
