
// ======================================================
// INFORMAÇÕES DO PROJETO
// ======================================================

// ESCREVA AQUI O NOME DO PROJETO
const projeto = {
    nome: "NOME DO PROJETO",
    subtitulo: "Descrição curta do projeto",
    ano: "2026",

    // ==================================================
    // INTEGRANTES DA EQUIPE
    // ==================================================
    // Adicione ou remova nomes conforme necessário.

    integrantes: [
        "Marcus André Alves de Siqueira",
        "Evaildo Santos Silva ",
        "Nicolas Luiz Saito",
    
    ]
};


// ======================================================
// PREENCHIMENTO AUTOMÁTICO DO SITE
// ======================================================

document.getElementById("nomeProjeto").textContent = projeto.nome;

document.getElementById("subtituloProjeto").textContent = projeto.subtitulo;

document.getElementById("anoProjeto").textContent = projeto.ano;


// ======================================================
// INTEGRANTES NO CABEÇALHO
// ======================================================

const listaIntegrantes = document.getElementById("integrantes");

listaIntegrantes.innerHTML = "";

projeto.integrantes.forEach((integrante) => {

    const item = document.createElement("span");

    item.textContent = integrante;

    listaIntegrantes.appendChild(item);

});


// ======================================================
// MENU MOBILE
// ======================================================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {

    menu.classList.toggle("active");

});
