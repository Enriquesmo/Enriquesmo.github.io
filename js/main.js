// Eliminar el loader después de 2 segundos
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    setTimeout(() => {
        loader.style.opacity = "0";
        setTimeout(() => loader.style.display = "none", 500); // Desaparece suavemente
    }, 1000); // Duración de la pantalla de carga: 2000 ms (2 segundos)
});

// Actualizar el estado activo de la navegación al hacer scroll
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav ul li a");

    let currentSection = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - 50 && pageYOffset < sectionTop + sectionHeight) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });

    // Reducir el tamaño de la barra de navegación al hacer scroll
    const header = document.querySelector("header");
    const logoName = document.querySelector(".logo-name");

    if (window.scrollY > 50) {
        header.classList.add("shrink");
        logoName.classList.add("move-to-header");
    } else {
        header.classList.remove("shrink");
        logoName.classList.remove("move-to-header");
    }
});