const toggler = document.querySelector('.menu-btn');

toggler.addEventListener('click', () => {
  document.body.classList.toggle('show-nav');
});
