// Archivo: script.js

document.getElementById('form-contacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto
    
    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre !== "" && email !== "" && mensaje !== "") {
        alert("Gracias por contactarnos, " + nombre + ". Hemos recibido tu mensaje.");
    } else {
        alert("Por favor, rellena todos los campos.");
    }
});
