function highlightCurrentPage() {
    const currentPath = new URL(window.location.href).pathname;
    const menuLinks = document.querySelectorAll(".site-menu a");

    menuLinks.forEach((link) => {
        const linkPath = new URL(link.href).pathname;

        if (linkPath === currentPath) {
            link.setAttribute("aria-current", "page");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    highlightCurrentPage();
});
