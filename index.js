const pokemon_number = 150;
const pokemonContainer =  document.getElementById('pokemon-container');

const pokemonId = async () => {
    for (let i = 1; i <= pokemon_number; i++) {
       await getPokemon(i);
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    createCard(pokemon);
    // search(pokemon)
    // console.log(pokemon);
}

pokemonId()
// getPokemon(1)

function createCard(pokemon) {
    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add('card');
    pokemonEl.classList.add(`${pokemon.types[0].type.name}`)
    const pokeId = (id) => {
        if(id < 10) { return id = "00"+id }
        if(id < 100) { return id = "0"+id }
        if(id > 100) { return id }
    }

    const pokemonCard = `
        
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <h3 class="card-stats-data"> ${pokemon.name} </h3>
        <div class="card-stats"> 
            <div class="card-stats-id"> 
                #<span class="card-stat-idContent"> ${pokeId(pokemon.id)} </span>
            </div>
        </div>
        <p class="card-stats-data"> Type: <span> ${pokemon.types[0].type.name} </span> </p>
          `;


<<<<<<< HEAD
=======
    const pokemonInfo = `
        ${pokemon.id}
`;
>>>>>>> 2d4fed5ac1e8fbadc36bfa3594481496cba417fc
    pokemonEl.innerHTML = pokemonCard;
    pokemonContainer.appendChild(pokemonEl);

}

<<<<<<< HEAD
async function pokeInfo() {
    let getPoke =  pokemonContainer.addEventListener('click', e => {
        let target = e.target;
        console.log(target)
        });
     const url = `https://pokeapi.co/api/v2/pokemon/${this.target}`;
     const res = await fetch(url);
     const pokemon = await res.json();
     console.log(pokemon)
}
pokeInfo()
=======
function search() {
    const input = document.querySelector('.search-input');
    const regExp = input.match("nahuel")
    console.log(regExp)
}
>>>>>>> 2d4fed5ac1e8fbadc36bfa3594481496cba417fc
