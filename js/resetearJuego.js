const resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", () => {
    if (confirm("¿Quieres resetear el juego?")) {
        generarGrid();
    }
});