
const adivinarDiv = document.getElementById("personaje-secreto");

let personajeSecreto;

function mostrarPersonajeSecreto() {
    adivinarDiv.innerHTML = "";

    const img = document.createElement("img");
    img.src = personajeSecreto.imagen;
    img.alt = personajeSecreto.nombre;

    adivinarDiv.appendChild(img);

    const info = document.createElement("div");
    info.textContent = `${personajeSecreto.nombre} - ${personajeSecreto.pelicula}`;
    adivinarDiv.appendChild(info);
}