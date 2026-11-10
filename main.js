const times = [
    {
        nome: "Flamengo",
        categoria: "Brasil",
        titulos: 8,
        estadio: "Maracanã"
    },
    {
        nome: "Corinthians",
        categoria: "Brasil",
        titulos: 7,
        estadio: "Neo Química Arena"
    },
    {
        nome: "Palmeiras",
        categoria: "Brasil",
        titulos: 12,
        estadio: "Allianz Parque"
    },
    {
        nome: "Santos",
        categoria: "Brasil",
        titulos: 8,
        estadio: "Vila Belmiro"
    },
    {
        nome: "São Paulo",
        categoria: "Brasil",
        titulos: 6,
        estadio: "Morumbi"
    },
    {
        nome: "Real Madrid",
        categoria: "Espanha",
        titulos: 15,
        estadio: "Santiago Bernabéu"
    },
    {
        nome: "Barcelona",
        categoria: "Espanha",
        titulos: 5,
        estadio: "Camp Nou"
    },
    {
        nome: "Manchester City",
        categoria: "Inglaterra",
        titulos: 1,
        estadio: "Etihad Stadium"
    }
];

const corpoTabela = document.getElementById("corpoTabela");

for (let time of times) {
    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${time.nome}</td>
        <td>${time.categoria}</td>
        <td>${time.titulos}</td>
        <td>${time.estadio}</td>
    `;

    corpoTabela.appendChild(linha);
}