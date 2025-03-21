document.addEventListener("DOMContentLoaded", function () {
    const emailRadio = document.getElementById("email");
    const phoneRadio = document.getElementById("phone");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");

    // Show email input by default
    emailInput.style.display = "block";
    phoneInput.style.display = "none";

    emailRadio.addEventListener("change", function () {
        emailInput.style.display = "block";
        phoneInput.style.display = "none";
    });

    phoneRadio.addEventListener("change", function () {
        phoneInput.style.display = "block";
        emailInput.style.display = "none";
    });

    // Smooth animation for sections (optional)
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
    });

    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transition = "opacity 1s ease-out, transform 1s ease-out";
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.3 });

    sections.forEach(section => {
        observer.observe(section);
    });
});
