document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const navMenu = document.getElementById("nav-menu");

    menuBtn.addEventListener("click", () => {
        // Intercambia la clase 'mostrar' en el menú de navegación
        navMenu.classList.toggle("mostrar");
        
        // Cambia dinámicamente el icono visual del menú
        if (navMenu.classList.contains("mostrar")) {
            menuBtn.innerHTML = "✕"; // Icono de cerrar
        } else {
            menuBtn.innerHTML = "☰"; // Icono original de hamburguesa
        }
    });
});
