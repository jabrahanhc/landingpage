const botonMenu = document.querySelector(".menu-boton");
const menu = document.querySelector("#menu");
const vistaMovil = window.matchMedia("(max-width: 720px)");

function mostrarMenu(abierto) {
  menu.hidden = vistaMovil.matches && !abierto;
  botonMenu.setAttribute("aria-expanded", String(vistaMovil.matches && abierto));
}

function adaptarMenu() {
  botonMenu.hidden = !vistaMovil.matches;
  mostrarMenu(false);
}

adaptarMenu();
vistaMovil.addEventListener("change", adaptarMenu);

botonMenu.addEventListener("click", () => {
  mostrarMenu(botonMenu.getAttribute("aria-expanded") !== "true");
});

menu.addEventListener("click", (evento) => {
  if (vistaMovil.matches && evento.target.closest("a")) {
    mostrarMenu(false);
  }
});

document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape" && botonMenu.getAttribute("aria-expanded") === "true") {
    mostrarMenu(false);
    botonMenu.focus();
  }
});

const botonEjecutar = document.querySelector("#ejecutar");
const salida = document.querySelector("#salida");

botonEjecutar.addEventListener("click", () => {
  salida.textContent = "› ¡Hola, mundo!";
  salida.classList.add("ejecutado");
});
