async function buscarPokemon() {

    const nomePokemon =
      document.getElementById("pokemonInput")
      .value
      .toLowerCase();
  
    const divPokemon =
      document.getElementById("pokemon");
  
    try {

      const resposta = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${nomePokemon}`
      );
  
      if (!resposta.ok) {
  
        throw new Error("Pokémon não encontrado");
  
      }
  
      const dados = await resposta.json();
  
      const nome = dados.name;
      const imagem =
        dados.sprites.front_default;
  
      const tipo =
        dados.types[0].type.name;
  
      const altura = dados.height;
      const peso = dados.weight;
  
      divPokemon.innerHTML = `
        <h2>${nome}</h2>
  
        <img src="${imagem}">
  
        <p><strong>Tipo:</strong> ${tipo}</p>
  
        <p><strong>Altura:</strong> ${altura}</p>
  
        <p><strong>Peso:</strong> ${peso}</p>
      `;
  
    } catch (erro) {
  
      divPokemon.innerHTML = `
        <p>Pokémon não encontrado!</p>
      `;
  
    }
  
  }