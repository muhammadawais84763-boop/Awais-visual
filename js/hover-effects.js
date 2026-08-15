document.addEventListener("DOMContentLoaded", () => {
    /*
     * WORD-LEVEL TITLE HOVER
     * Only the word under the cursor moves.
     */
    const titleSelectors = [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        ".hero-title",
        ".page-title",
        ".section-title",
        ".card-title",
        ".service-title",
        ".project-title"
    ];

    const titles = document.querySelectorAll(
        titleSelectors.join(",")
    );

    titles.forEach((title) => {
        if (title.dataset.wordHoverReady === "true") {
            return;
        }

        title.dataset.wordHoverReady = "true";

        const walker = document.createTreeWalker(
            title,
            NodeFilter.SHOW_TEXT
        );

        const textNodes = [];
        let node;

        while ((node = walker.nextNode())) {
            if (node.nodeValue.trim()) {
                textNodes.push(node);
            }
        }

        textNodes.forEach((textNode) => {
            const fragment = document.createDocumentFragment();
            const parts = textNode.nodeValue.split(/(\s+)/);

            parts.forEach((part) => {
                if (/^\s+$/.test(part)) {
                    fragment.appendChild(
                        document.createTextNode(part)
                    );
                    return;
                }

                if (!part) {
                    return;
                }

                const span = document.createElement("span");

                span.className = "word-hover";
                span.textContent = part;

                fragment.appendChild(span);
            });

            textNode.parentNode.replaceChild(
                fragment,
                textNode
            );
        });
    });

    /*
     * Learn More / action buttons
     */
    const buttonWords = [
        "learn more",
        "learnmore",
        "view project",
        "view portfolio",
        "view details",
        "read more",
        "explore",
        "get started",
        "contact us",
        "book now",
        "source"
    ];

    document.querySelectorAll("a, button").forEach((element) => {
        const label = element.textContent
            .replace(/\s+/g, " ")
            .trim()
            .toLowerCase();

        if (
            buttonWords.some((word) => label === word)
        ) {
            element.classList.add("learn-more");
            element.classList.add("border-draw");
        }
    });

    /*
     * Existing action buttons get the animated border.
     */
    document.querySelectorAll(
        ".btn, .button, .cta, .service-btn, .project-btn, .portfolio-btn, .pricing-btn"
    ).forEach((element) => {
        element.classList.add("border-draw");
    });



    /*
     * GLOBAL BORDER DRAW
     * Add the clockwise self-drawing border to the website's visible
     * bordered UI elements, cards and containers.
     */
    const borderTargets = document.querySelectorAll(`
        .media-card,
        .card,
        .work-card,
        .process-card,
        .stats,
        .stat,
        .bullet,
        .notice,
        .price-card,
        .quote-box,
        .form-control,
        .eyebrow,
        .tag,
        .icon-box,
        .feature-band,
        .service-card,
        .project-card,
        .portfolio-card,
        .pricing-card,
        .nav-button,
        .button,
        .menu-button,
        .border-draw
    `);

    borderTargets.forEach((element) => {
        element.classList.add("border-draw");
    });

    /*
     * Catch any additional visible bordered UI element on any page.
     * This keeps the border animation consistent across the whole site.
     */
    document.querySelectorAll("body *").forEach((element) => {
        if (
            element.matches("html, body, img, video, svg, path, .logo, .av-brand-logo") ||
            element.closest(".logo")
        ) return;

        const style = getComputedStyle(element);
        const widths = [style.borderTopWidth, style.borderRightWidth, style.borderBottomWidth, style.borderLeftWidth];
        const hasVisibleBorder = widths.some((width) => parseFloat(width) > 0) && style.borderStyle !== "none";
        if (hasVisibleBorder) element.classList.add("border-draw");
    });

    /*
     * GLOBAL IMAGE / VIDEO HOVER
     * Applies across the entire website, not only the portfolio page.
     * Small interface/logo assets are ignored so the effect stays premium.
     */
    document.querySelectorAll("img, video").forEach((media) => {
        if (
            media.closest(".navbar, nav, header, footer") ||
            media.classList.contains("av-no-media-hover") ||
            media.closest(".logo") ||
            media.closest(".social-icon")
        ) {
            return;
        }

        media.classList.add("av-media-hover");
    });

});
