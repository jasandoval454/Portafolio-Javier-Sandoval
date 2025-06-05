function mostrarSeccion(id) {
    // Oculta todas las secciones
    document.getElementById("quienSoy").style.display = "none";
    document.getElementById("correo").style.display = "none";
    document.getElementById("habilidades").style.display = "none";

    // Muestra la sección seleccionada
    document.getElementById(id).style.display = "block";
}
