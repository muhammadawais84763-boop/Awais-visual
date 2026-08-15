/* =========================================================
   AWAIS VISUALS - MAIN JAVASCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-button");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open");
        });

        navLinks.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navLinks.classList.remove("open");
            });
        });
    }

    const revealItems = document.querySelectorAll(".reveal");

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealItems.forEach(function (item) {
        revealObserver.observe(item);
    });

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".nav-links a").forEach(function (link) {
        const linkPage = link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (currentPage === "" && linkPage === "index.html")
        ) {
            link.classList.add("active");
        }
    });

    // Portfolio category filters
    const filterButtons = document.querySelectorAll(".filter-button");
    const workCards = document.querySelectorAll(".work-card");

    if (filterButtons.length && workCards.length) {
        filterButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                const filter = button.getAttribute("data-filter") || "all";

                filterButtons.forEach(function (item) {
                    item.classList.toggle("active", item === button);
                    item.setAttribute("aria-pressed", item === button ? "true" : "false");
                });

                workCards.forEach(function (card, index) {
                    const category = card.getAttribute("data-category");
                    const shouldShow = filter === "all" || category === filter;

                    if (shouldShow) {
                        card.classList.remove("filter-hidden");
                        card.style.setProperty("--filter-delay", `${index * 45}ms`);
                    } else {
                        card.classList.add("filter-hidden");
                    }
                });
            });
        });

        filterButtons.forEach(function (button) {
            button.setAttribute("aria-pressed", button.classList.contains("active") ? "true" : "false");
        });
    }

    document.querySelectorAll("form[data-demo-form]").forEach(function (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const message = form.querySelector(".form-success");

            if (message) {
                message.hidden = false;
                message.textContent =
                    "Thanks! Your request has been received. Connect this form to your email service before publishing.";
            }

            form.reset();
        });
    });
});
