const grid = document.getElementById("grid");

function mezclarArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function generarGrid() {
    grid.innerHTML = "";

    const personajesMezclados = mezclarArray([...personajes]);

    personajeSecreto = personajesMezclados[Math.floor(Math.random() * personajes.length)];

    mostrarPersonajeSecreto();

    personajesMezclados.forEach(personaje => {
        const container = document.createElement("div");

        const img = document.createElement("img");
        img.src = personaje.imagen;

        img.addEventListener("click", () => {
            img.src = img.src.includes("miyazaki") ? personaje.imagen : miyazaki;
        });

        const info = document.createElement("div");
        info.textContent = `${personaje.nombre} - ${personaje.pelicula}`;
        info.style.textAlign = "center";
        info.style.fontSize = "0.8em";

        container.appendChild(img);
        container.appendChild(info);
        grid.appendChild(container);
    });
}

// Inicializamos aquí el juego
generarGrid();