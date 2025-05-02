document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada');
});


function toggleMenu() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show"); // Agrega o quita la clase 'show'
}


// Script para que funcione el envío del formulario a través del servicio de EmailJS

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    emailjs.sendForm('service_yphksjj', 'template_0lhiiy8', this)
      .then(function() {
        alert('Mensaje enviado con éxito 🎉');
      }, function(error) {
        console.error('Error:', error);
        alert('Hubo un problema 😢');
      });
  });
