document.addEventListener('DOMContentLoaded', function(){
  // Mobile menu toggle (works for multiple buttons)
  function setupMenu(btnId, navId){
    var btn = document.getElementById(btnId);
    var nav = document.getElementById(navId);
    if(!btn || !nav) return;
    btn.addEventListener('click', function(){ nav.classList.toggle('open'); });
  }
  setupMenu('menuBtn','navLinks');
  setupMenu('menuBtn2','navLinks2');
  setupMenu('menuBtn3','navLinks3');
  setupMenu('menuBtn4','navLinks4');

  // Theme toggle (persist in localStorage)
  function setupTheme(toggleId){
    var t = document.getElementById(toggleId);
    if(!t) return;
    var root = document.body;
    var current = localStorage.getItem('theme') || 'light';
    root.className = current;
    t.addEventListener('click', function(){
      root.className = root.className === 'light' ? '' : 'light';
      localStorage.setItem('theme', root.className || 'dark');
      // icon swap
      t.textContent = root.className === 'light' ? '🌙' : '☀️';
    });
    // initialize icon
    t.textContent = root.className === 'light' ? '🌙' : '☀️';
  }
  setupTheme('themeToggle');
  setupTheme('themeToggle2');
  setupTheme('themeToggle3');
  setupTheme('themeToggle4');

  // Testimonials slider simple
  var slides = document.querySelectorAll('.testi-slide');
  var current = 0;
  function showSlide(n){
    slides.forEach((s,i)=> s.classList.toggle('active', i===n));
  }
  showSlide(0);
  document.getElementById('nextTesti')?.addEventListener('click', function(){
    current = (current+1)%slides.length; showSlide(current);
  });
  document.getElementById('prevTesti')?.addEventListener('click', function(){
    current = (current-1+slides.length)%slides.length; showSlide(current);
  });
  // auto rotate
  setInterval(function(){ current=(current+1)%slides.length; showSlide(current); }, 6000);

  // Contact form (local fake send)
  var form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var status = document.getElementById('formStatus');
      status.textContent = 'Sending...';
      setTimeout(function(){ status.textContent = 'Thanks! I will reach out within 24 hours.'; form.reset(); }, 900);
    });
  }

});
