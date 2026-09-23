// ===============================
// MENU MOBILE
// ===============================

const menuButton = document.getElementById("menu-btn");

const navMenu = document.querySelector(".nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// ===============================
// FECHAR MENU AO CLICAR
// ===============================

const navLinks = document.querySelectorAll(".nav-menu a");


navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ===============================
// ANO AUTOMÁTICO
// ===============================

const year = document.getElementById("year");

year.textContent = new Date().getFullYear();


// ===============================
// ANIMAÇÃO AO ROLAR
// ===============================

const elements = document.querySelectorAll(
    ".tech-card, .project-card, .about-card, .timeline-item"
);


const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.15
    }

);


elements.forEach((element) => {

    element.classList.add("hidden");

    observer.observe(element);

});