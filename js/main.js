function destacarPaginaAtual() {
    const caminhoAtual = new URL(window.location.href).pathname;
    const linksMenu = document.querySelectorAll(".menu-site a");

    linksMenu.forEach((link) => {
        const caminhoLink = new URL(link.href).pathname;

        if (caminhoLink === caminhoAtual) {
            link.setAttribute("aria-current", "page");
        }
    });
}

function configurarFormularios() {
    const formularios = document.querySelectorAll(".formulario-autenticacao");

    formularios.forEach((formulario) => {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            if (!formulario.checkValidity()) {
                formulario.reportValidity();
                return;
            }

            const nome = formulario.querySelector("#campo-nome")?.value.trim();
            const email = formulario.querySelector("#campo-email")?.value.trim();

            if (nome) {
                localStorage.setItem("usuarioBlog", nome);
            } else if (email) {
                localStorage.setItem("usuarioBlog", email);
            }

            window.location.href = formulario.getAttribute("action");
        });
    });
}

function configurarSaida() {
    const linksSair = document.querySelectorAll('a[href$="index.html"]');

    linksSair.forEach((link) => {
        if (link.textContent.trim().toLowerCase() === "sair") {
            link.addEventListener("click", () => {
                localStorage.removeItem("usuarioBlog");
            });
        }
    });
}

function mostrarUsuarioSalvo() {
    const usuario = localStorage.getItem("usuarioBlog");
    const chamada = document.querySelector(".destaque .chamada");

    if (usuario && chamada) {
        chamada.textContent = "Olá, " + usuario;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    destacarPaginaAtual();
    configurarFormularios();
    configurarSaida();
    mostrarUsuarioSalvo();
});
