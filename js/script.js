const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("nav-open");

    const isOpen = navMenu.classList.contains("nav-open");

    if (isOpen) {

        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close navigation menu");

    } else {

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open navigation menu");

    }

    menuToggle.setAttribute("aria-expanded", isOpen);

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

const reservationName =
    document.querySelector("#reservation-name");

const reservationDate =
    document.querySelector("#reservation-date");

const reservationTime =
    document.querySelector("#reservation-time");

const guestsInput =
    document.querySelector("#guests");


// Prevent users from selecting a past date

const today = new Date();

const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, "0");
const day = String(today.getDate()).padStart(2, "0");

const todayString = `${year}-${month}-${day}`;

reservationDate.min = todayString;


// Handle reservation form submission

reservationForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = reservationName.value.trim();
    const date = reservationDate.value;
    const time = reservationTime.value;
    const guests = guestsInput.value;


    if (name === "") {

        reservationMessage.textContent =
            "Please enter your name.";

        return;
    }


    if (date === "") {

        reservationMessage.textContent =
            "Please select a date.";

        return;
    }


    if (time === "") {

        reservationMessage.textContent =
            "Please select a time.";

        return;
    }


    if (guests === "" || guests < 1 || guests > 20) {

        reservationMessage.textContent =
            "Please enter a number of guests between 1 and 20.";

        return;
    }


    reservationMessage.textContent =
        `Thank you, ${name}! Your table for ${guests} guest(s) is reserved for ${date} at ${time}.`;

    reservationForm.reset();
});

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("nav-open");

        menuToggle.textContent = "☰";

    });

});

const galleryImages = document.querySelectorAll(".gallery-image");

const lightbox = document.querySelector("#lightbox");

const lightboxImage = document.querySelector("#lightbox-image");

const lightboxClose = document.querySelector("#lightbox-close");

galleryImages.forEach(function (image) {

    image.addEventListener("click", function () {

        lightboxImage.src = image.src;

        lightboxImage.alt = image.alt;

        lightbox.style.display = "flex";

    });

});

lightboxClose.addEventListener("click", function () {

    lightbox.style.display = "none";

});

lightbox.addEventListener("click", function (event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        lightbox.style.display = "none";

    }

});

const filterButtons = document.querySelectorAll(".filter-btn");

const menuCategories = document.querySelectorAll(".menu-category");


filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedCategory =
            button.dataset.category;


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        menuCategories.forEach(function (category) {

            const categoryName =
                category.dataset.category;


            if (
                selectedCategory === "all" ||
                categoryName === selectedCategory
            ) {

                category.style.display = "";

            } else {

                category.style.display = "none";

            }

        });

    });

});



