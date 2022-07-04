const header = document.querySelector("header")

/* ------- Navbar ------- */

function stickyNavbar() {
    header.classList.toggle("scrolled",  window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* ------- Scroll Reveal ------- */

window.sr = ScrollReveal();

sr.reveal('.showcase-info', {
    duration: 2500,
    delay: 600,
    origin: "bottom",
    distance: "60px"
});

sr.reveal('.showcase-image', {
    duration: 2500,
    delay: 700,
    origin: "top",
    distance: "60px"
});

sr.reveal('.navbar', {
    duration: 2500,
    origin: "bottom",
    distance: "-100px"
});

sr.reveal('.about-info', {
    duration: 3000,
    delay: 600,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('.skillsContainer', {
    duration: 3000,
    delay: 600,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('.contact-form', {
    duration: 3000,
    delay: 600,
    origin: "bottom",
    distance: "100px"
});

sr.reveal('.contact-info', {
    duration: 3000,
    delay: 600,
    origin: "bottom",
    distance: "100px"
});