// TASK 5: Interactividad básica

// 1. Mensaje de bienvenida al cargar la página
window.onload = function () {
    console.log("¡Bienvenido al portafolio de Dylan Gamero!");
    // Opcional: alert("Hola, bienvenido a mi portafolio");
};

// 2. Cambiar texto de un párrafo al hacer clic
function cambiarDescripcion() {
    const parrafo = document.getElementById("about-text");
    parrafo.innerText = "¡Gracias por interesarte en mi trabajo! Soy un desarrollador apasionado por la tecnología en Barranquilla.";
    parrafo.style.color = "#585b6c";
    parrafo.style.fontWeight = "bold";
}

// 3. Mostrar/Ocultar contenido (Efecto dinámico)
function toggleContacto() {
    const infoExtra = document.getElementById("extra-info");
    if (infoExtra.style.display === "none") {
        infoExtra.style.display = "block";
    } else {
        infoExtra.style.display = "none";
    }
}