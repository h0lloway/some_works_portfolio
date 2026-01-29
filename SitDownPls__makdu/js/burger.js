// burger

// вариант на jQuerry

// $(document).ready(function () {
//   $('.header__burger').click(function (event) {
//     $('.header__burger,.header__bot-nav').toggleClass('active');
//     $('body').toggleClass('lock');
//   });
// });


const headerBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__bot-nav");

headerBurger.addEventListener('click', function() {
  headerBurger.classList.toggle('active');
  headerMenu.classList.toggle('active');
  // добавляем транзишн через js, чтобы не багалась менюшка при ресайзе
  headerMenu.style.transition = 'all .4s ease';
  
  document.body.classList.toggle('lock');
});

headerMenu.addEventListener('transitionend', function () {
  if (!headerMenu.classList.contains('active')) {
    headerMenu.removeAttribute('style');
  }
});