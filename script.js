// JavaScript Document
document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("bienvenidaMostrada")) {
        mostrarAlertaBienvenida();
        localStorage.setItem("bienvenidaMostrada", "true"); // La alerta se mostrará solo una vez
    }
});

function mostrarAlertaBienvenida() {
    alert("¡Bienvenido a la página web!");
}