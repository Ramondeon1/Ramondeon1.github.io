function destacarPaginaAtual() {
    const caminhoAtual = new URL(window.location.href).pathname;
    const linksDoMenu = document.querySelectorAll(".menu-site a");

    linksDoMenu.forEach((link) => {
        const caminhoDoLink = new URL(link.href).pathname;

        if (caminhoDoLink === caminhoAtual) {
            link.setAttribute("aria-current", "page");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    destacarPaginaAtual();
});
