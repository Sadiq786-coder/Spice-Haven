const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("nav-open");

    if (navMenu.classList.contains("nav-open")) {
        menuToggle.textContent = "✕";
    } else {
        menuToggle.textContent = "☰";
    }

});

const contactForm = document.querySelector(".contact form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

const formMessage = document.querySelector("#form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();

    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }

    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }

    if (message === "") {
        formMessage.textContent = "Please enter a message.";
        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been sent.";

});

const reservationForm = document.querySelector("#reservation-form");

const reservationMessage =
    document.querySelector("#reservation-message");

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    reservationMessage.textContent =
        "Your table has been reserved successfully!";

});