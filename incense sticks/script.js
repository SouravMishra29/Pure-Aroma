const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

document.getElementById('home').classList.add('active');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
  });
});

document.getElementById('exploreProductsBtn').addEventListener('click', () => {
  sections.forEach(section => section.classList.remove('active'));
  document.getElementById('products').classList.add('active');
});

document.getElementById('knowMoreBtn').addEventListener('click', () => {
  document.querySelector('.about-details').classList.toggle('show');
});

document.querySelectorAll('.product-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.nextElementSibling.classList.toggle('show');
  });
});

document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thank you for contacting PureAroma.');
});