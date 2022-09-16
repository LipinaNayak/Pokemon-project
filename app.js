const pokedex = document.getElementById("hellopokemon");
console.log(pokedex);

const fetchpokemon = () => {
  const promises = [];
  for (let i = 1; i <= 150; i++) {
    const Url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(Url).then((res) => res.json()));
  }
  Promise.all(promises).then((results) => {
    const pokemon = results.map((data) => ({
      name: data.name,
      id: data.id,
      image: data.sprites['front_default'],
      type: data.types.map((type) => type.type.name).join(","),
    }));
    displaypokemon(pokemon);
  });
};
const displaypokemon = (pokemon) => {
  console.log(pokemon);
  const pokemonHTMLString = pokemon . map (pokeman => `
  <li class ="card">
    <img class="card-image" src ="${pokeman.image}"/>
    <h2 class ="card-title">  ${pokeman.id}.${pokeman.name}</h2>
    <p class = "card-type">Type: ${pokeman.type}</p>
</li>
  `).join('');
  pokedex.innerHTML=pokemonHTMLString;
};

fetchpokemon();
