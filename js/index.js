document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.getElementById('hamburger-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerMenu.addEventListener('click', function () {
        mobileMenu.classList.toggle('active');
    });
});










// winter clinic overlay
document.addEventListener('DOMContentLoaded', function () {
    const winterClinicBtn = document.querySelector('.winter-clinic-btn');
    const winterClinicOverlay = document.getElementById('winter-clinic-overlay');
    const closeOverlayBtn = document.querySelector('.close-overlay-btn');
  
    winterClinicBtn.addEventListener('click', function () {
      winterClinicOverlay.classList.add('show');
    });
  
    closeOverlayBtn.addEventListener('click', function () {
      winterClinicOverlay.classList.remove('show');
    });
  });