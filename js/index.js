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














  // special request form
  // Initialize EmailJS with your user ID (Public Key)
emailjs.init("bANOBykaP5XZdvtol");

document.getElementById("special-request-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    // Collect form data
    const formData = {
        full_name: document.getElementById("full-name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value,
    };

    // Send email using EmailJS
    emailjs.send("service_j3k8dyy", "__ejs-test-mail-service__", formData)
        .then(function (response) {
            alert("Your message has been sent successfully!");
            document.getElementById("special-request-form").reset(); // Reset the form
        })
        .catch(function (error) {
            alert("Oops! There was an error sending your message. Please try again.");
            console.error("EmailJS error:", error);
        });
});
