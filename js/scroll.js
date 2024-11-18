// Obtener la flecha de desplazamiento
var scrollIndicator = document.getElementById("arrow");

// Obtener la primera sección
var firstSection = document.getElementById("section1");

// Función para verificar si la flecha debe ocultarse
function checkScrollIndicator() {
    if (window.pageYOffset > firstSection.offsetHeight) {
        // Ocultar la flecha de desplazamiento
        scrollIndicator.style.display = "none";
    } else {
        // Mostrar la flecha de desplazamiento
        scrollIndicator.style.display = "block";
    }
}

// Escuchar el evento de desplazamiento del documento
window.addEventListener("scroll", function() {
    // Verificar si la flecha debe ocultarse
    checkScrollIndicator();
});

// Verificar inicialmente si la flecha debe ocultarse al cargar la página
checkScrollIndicator();