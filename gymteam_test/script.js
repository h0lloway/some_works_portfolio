document.addEventListener('DOMContentLoaded', function () {
  var modal   = document.getElementById('modal');
  var overlay = document.getElementById('modal-overlay');
  var closeBtn = document.getElementById('modal-close');

  function openModal() {
    var scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = scrollbarWidth + 'px';
    document.body.style.overflow = 'hidden';
    modal.classList.add('is-open');
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }

  document.querySelector('.hero__btn').addEventListener('click', openModal);
  overlay.addEventListener('click', closeModal);
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
});
