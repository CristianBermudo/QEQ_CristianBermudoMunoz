
const githubDiv = document.getElementById("github");
const usuarioGitHub = "CristianBermudo";

fetch(`https://api.github.com/users/${usuarioGitHub}`)
    .then(response => response.json())
    .then(data => {

        const container = document.createElement("div");

        const link = document.createElement("a");
        link.href = data.html_url;
        link.target = "_blank";

        const img = document.createElement("img");
        img.src = data.avatar_url;
        img.alt = data.login;

        link.appendChild(img);

        const info = document.createElement("div");
        info.textContent = `${data.login} - ${data.public_repos} repositorios`;

        container.appendChild(link);
        container.appendChild(info);
        githubDiv.appendChild(container);
    })
    .catch(err => {
        githubDiv.textContent = "No se pudo cargar la firma de GitHub.";
        console.error(err);
    });