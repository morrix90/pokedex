const pokemon_number = 150;
const pokemonContainer =  document.getElementById('pokemon-container');
const button = document.getElementById('button');





// LISTO LOS POKEMON
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
    // console.log(pokemon)

}

pokemonId()
// getPokemon(1)


// GENERO LAS CARDS PARA PINTAR LOS POKEMON

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
        
        <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}" class="card-img">
        <h3 class="card-stats-data"> ${pokemon.name} </h3>
        <div class="card-stats"> 
            <div class="card-stats-id"> 
                #<span class="card-stat-idContent"> ${pokeId(pokemon.id)} </span>
            </div>
        </div>
        <p class="card-stats-data"> Type: <span> ${pokemon.types[0].type.name} </span> </p>
          `;

    pokemonEl.innerHTML = pokemonCard;
    pokemonContainer.appendChild(pokemonEl);

}

// BUSQUEDA DE POKEMON POR NOMBRE

const searchPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const pokemon = await res.json();
    pokeInfo(pokemon);

    // console.log(pokemon.name);
}
const search = async () => {
    const input = document.querySelector('.search-input');
    const inputValue = input.value;

    // await searchPokemon(inputValue.toLowerCase())
    // await searchPokemon(pokemon1)

}

// PINTO LA INFO DE POKEMON BUSCADO EN EL MODAL

function pokeInfo(pokemon) {
    const title = document.querySelector('.modal-title');
    const pokeImg = document.querySelector('.modal-body-pokeImg');
    const height = document.querySelector('.height');
    const xp = document.querySelector('.xp');
    const hp = document.querySelector('.hp');
    const atk = document.querySelector('.atk');
    const dfs = document.querySelector('.dfs');

    title.innerText = `${pokemon.name}`
    pokeImg.setAttribute('src', pokemon.sprites.other.dream_world.front_default);
    xp.innerHTML = `XP: ${pokemon.base_experience}`;
    hp.innerHTML = `HP: ${pokemon.stats[0].base_stat}`
    atk.innerHTML = `ATK: ${pokemon.stats[1].base_stat}`
    dfs.innerHTML = `DFS: ${pokemon.stats[2].base_stat}`

}

// MOSTRAR LA BUSQUEDA
const pokemonList = document.querySelector('.pokemon-search-ul');
const pokemon1 = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=150&offset=0`;
    const res = await fetch(url);
    const pokemon = await res.json();
    
    displayList(pokemon)


    }   

function displayList(pokemon) {
    const input = document.querySelector('.search-input');
    let inputValue = input.value;
    const poke = pokemon.results;
    for(let pokemon of poke){
        let name = pokemon.name;
        if(name.indexOf(inputValue) != -1) {
            const li = document.createElement('li');
            li.classList.add('pokemon-search-list')
        
            let list = `<a href="" class="pokemon-search-link">${pokemon.name}</a>`;
            li.innerHTML = list;
            pokemonList.appendChild(li);
            console.log(pokemon.name);
        }

}
}

button.addEventListener('click', ()=> {
    const pokemonSearch = document.querySelector('.pokemon-search')
    pokemonSearch.classList.toggle('display')
})