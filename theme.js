const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Detectar tema del sistema
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Obtener tema guardado
const storedTheme = localStorage.getItem("theme");

// Aplicar tema inicial
if (storedTheme) {
    body.classList.toggle("dark", storedTheme === "dark");
} else if (systemPrefersDark) {
    body.classList.add("dark");
}

// Ajustar icono inicial
updateIcon();

// Evento click
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark");

    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    updateIcon();
});

// Función para cambiar icono
function updateIcon() {
    toggleButton.innerHTML = body.classList.contains("dark")
        ? '<i class="fa-solid fa-sun"></i>'
        : '<i class="fa-solid fa-moon"></i>';
}
