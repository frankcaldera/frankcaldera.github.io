document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(
        ".post, .post-content, .page, .sidebar"
    );

    elements.forEach((el, i) => {
        el.style.animationDelay = `${i * 0.15}s`;
        el.classList.add("fade-in");
    });
});
