document.addEventListener("DOMContentLoaded", function () {
  DarkMode();
  BarrasActive();
});

function DarkMode() {
  const BtnDarkMode = document.querySelector(".dark-mode");
  const Body = document.querySelector("body");

  // Verifica si el usuario prefiere modo oscuro
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (prefersDark) {
    Body.classList.add("Dark__Mode--Active");
  }

  BtnDarkMode.addEventListener("click", () => {
    Body.classList.toggle("Dark__Mode--Active");
  });
}

function BarrasActive() {
  const Barra = document.querySelector(".mobileversion");
  const Enlaces = document.querySelector(".Header__Nav");

  Barra.addEventListener("click", () => {
    Enlaces.classList.toggle("Active");
  });
}
