AOS.init({ duration: 800, once: true, offset: 60 });

const roles = ["Competitive Programmer", "Executive @ Shohoj Coding", "CSE Undergraduate", "Problem Solver"];
let roleIdx = 0, charIdx = 0;
const typedSpan = document.getElementById("typed-text");
function typeNext() {
  if (!typedSpan) return;
  if (charIdx <= roles[roleIdx].length) {
    typedSpan.innerText = roles[roleIdx].slice(0, charIdx);
    charIdx++;
    setTimeout(typeNext, 100);
  } else {
    setTimeout(() => {
      charIdx = 0;
      roleIdx = (roleIdx + 1) % roles.length;
      typeNext();
    }, 2000);
  }
}
typeNext();

const skillBars = document.querySelectorAll('.skill-fill');
const animateSkills = () => {
  skillBars.forEach(bar => {
    const width = bar.getAttribute('data-width');
    if (width && !bar.style.width) bar.style.width = width + '%';
  });
};

const counters = document.querySelectorAll('.stat-num');
const startCounting = () => {
  counters.forEach(c => {
    const target = +c.getAttribute('data-count');
    let current = 0;
    const update = setInterval(() => {
      if (current < target) {
        current += Math.ceil(target / 50);
        c.innerText = current;
      } else {
        c.innerText = target;
        clearInterval(update);
      }
    }, 20);
  });
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (entry.target.classList && entry.target.classList.contains('skill-fill')) {
        animateSkills();
      }
      if (entry.target.id === 'about') {
        startCounting();
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

document.querySelectorAll('.skill-fill').forEach(el => observer.observe(el));
const aboutSec = document.getElementById('about');
if (aboutSec) observer.observe(aboutSec);

const certList = [
  { name: "DUET IUPC 2025", img: "https://drive.google.com/uc?export=view&id=17I9DZ38ccgHl_tCcz5ojpZFoNvxXAR4v", badge: "Contest" },
  { name: "ICPC Asia Dhaka Regional 2025", img: "https://drive.google.com/uc?export=view&id=1vgsHWhpR6cf7WtKOTfOrds6280nl2Ho6", badge: "ICPC" },
  { name: "BUET IUPC", img: "https://drive.google.com/uc?export=view&id=1JMgx3Hh7QmBonIhMaFedtTdtkIdzxNzh", badge: "Contest" },
  { name: "OneCoder Challenge S1 (2nd Runner-Up)", img: "https://drive.google.com/uc?export=view&id=1zJ3eeYDg8WODaqLFkYuJtsc6fOTpV3DM", badge: "Runner-Up" },
  { name: "Code Harbor S4 (1st Runner-Up)", img: "https://drive.google.com/uc?export=view&id=1ssXCWKQA4JfJ9XbYGZ6sUkIF85S4VEpK", badge: "1st Runner-Up" },
  { name: "Certificate of Leadership", img: "https://drive.google.com/uc?export=view&id=1pP9SzIR2wJGiD7LTqion8GaNXeae92Sm", badge: "Shohoj Coding" },
  { name: "Best Ambassador of Month", img: "https://drive.google.com/uc?export=view&id=1xdk0a8FqcaVL63aHeKpzAESefjQFa1kU", badge: "Leadership" }
];

const certContainer = document.getElementById('certsGrid');
if (certContainer) {
  certContainer.innerHTML = certList.map(cert => `
    <div class="cert-card" data-aos="fade-up">
      <img src="${cert.img}" alt="${cert.name}" referrerpolicy="no-referrer" loading="lazy">
      <div style="padding:1rem;">
        <h4>${cert.name}</h4>
        <span class="hero-badge">${cert.badge}</span>
      </div>
    </div>
  `).join('');
}

const galleryImgs = [
  "https://drive.google.com/uc?export=view&id=12wTIuAmnUtMKxquKrKq3_au2G9WZtMeF",
  "https://drive.google.com/uc?export=view&id=1IGFm0jy_0ooUDf2oxy5K4UAkxiKz5boS",
  "https://drive.google.com/uc?export=view&id=1xonDhIEzatCR5HESxHaoa0XqVDPwBOjI",
  "https://drive.google.com/uc?export=view&id=1XzWe5CzNZFtQdsiaxw16TZpYVAAa2IXZ",
  "https://drive.google.com/uc?export=view&id=10PxrqdsaNCh0NBAVeyFXEkAbwQfpxXL4",
  "https://drive.google.com/uc?export=view&id=1_GSfVu8Wwr8JMV1fW8qdkde0Rx8fIKkI",
  "https://drive.google.com/uc?export=view&id=1Ko0Z38sT5gsaeewuLlFcwHShmypbEfb0"
];
const galleryDiv = document.getElementById('galleryMasonry');
if (galleryDiv) {
  galleryDiv.innerHTML = galleryImgs.map(url => `
    <div class="gal-item" data-lightbox-trigger>
      <img src="${url}" loading="lazy" referrerpolicy="no-referrer">
    </div>
  `).join('');
}

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeLightbox = document.getElementById('closeLightbox');

function openLightbox(src) {
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
  }
}
function closeLightboxFunc() {
  if (lightbox) lightbox.style.display = 'none';
}

document.querySelectorAll('.gal-item, .cert-card').forEach(el => {
  el.addEventListener('click', (e) => {
    const img = e.currentTarget.querySelector('img');
    if (img && img.src) openLightbox(img.src);
  });
});
if (closeLightbox) closeLightbox.addEventListener('click', closeLightboxFunc);
if (lightbox) lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightboxFunc(); });

const ham = document.getElementById('hamburger');
const navLinksDiv = document.getElementById('navLinks');
if (ham && navLinksDiv) {
  ham.addEventListener('click', () => navLinksDiv.classList.toggle('show'));
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => navLinksDiv.classList.remove('show'));
  });
}

const topBtn = document.getElementById('backToTop');
if (topBtn) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 600) topBtn.classList.add('visible');
    else topBtn.classList.remove('visible');
  });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollPos = window.scrollY + 120;
  sections.forEach(sec => {
    if (sec.offsetTop <= scrollPos && sec.offsetTop + sec.offsetHeight > scrollPos) {
      const id = sec.getAttribute('id');
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${id}`) link.classList.add('active');
      });
    }
  });
});

const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✨ Message sent! (Demo) I will get back to you soon.');
    contactForm.reset();
  });
}

setTimeout(() => {
  if (document.querySelector('.skill-fill')) animateSkills();
}, 800);