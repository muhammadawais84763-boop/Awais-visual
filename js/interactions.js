document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll(
        "a, button, .card, .service-card, .project-card, .pricing-card, h1, h2, h3, h4, h5, h6"
    );

    items.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.classList.add("is-hovered");
        });

        item.addEventListener("mouseleave", () => {
            item.classList.remove("is-hovered");
        });
    });
});
