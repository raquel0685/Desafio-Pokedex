const PokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon();

    pokemon.number = pokeDetail.id;
    pokemon.name = pokeDetail.name;

    const types = pokeDetail.types.map((typeSlot)=>typeSlot.type.name);
    const [type] = types;
    pokemon.types = types;
    pokemon.type = type;

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default;

    return pokemon;

}

PokeApi.getPokemonDetails = (pokemon)=>{
    return fetch(pokemon.url)
    .then((response)=> response.json())
    .then(convertPokeApiDetailToPokemon)
} 

PokeApi.getPokemons = (offset = 0,limit = 10) => {

    const url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`;

    return fetch(url)
        .then((response)=>response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons)=>pokemons.map(PokeApi.getPokemonDetails))
        .then((detailRequests)=>Promise.all(detailRequests))
        .then((pokemonDetails)=> console.log(pokemonDetails))
        .catch((error)=>console.error(error))
}

//info.html

    const urlAbout = `https://pokeapi.co/api/v2/pokemon/`;

     fetch(urlAbout)
    .then((response)=> response.json())
    .then((jsonBody)=> console.log(jsonBody.results))
    .then((pokemonPage)=> pokeStartHtml.innerHTML = convertPokemonStartToHtml(pokemonPage))
    .then((pokemonAboutList)=>{
    pokemonAbout.addEventListener('click', ()=>{
        for (let i = 0; i < pokemonAboutList.length; i++) {
            const pokemon = pokemonAboutList[i];
            pokeConvertedHtml.innerHTML = convertPokemonAboutToHtml(pokemon);
        }
    })
})

const urlStats = `https://pokeapi.co/api/v2/stat/`;

 fetch(urlStats)
.then((response)=> response.json())
.then((jsonBody)=> console.log(jsonBody.results))
.then((pokemonPage)=> pokeStartHtml.innerHTML = convertPokemonStartToHtml(pokemonPage))
.then((pokemonStatsList)=> {
pokemonStats.addEventListener('click', ()=>{
    for (let i = 0; i < pokemonStatsList.length; i++) {
        const pokemon = pokemonStatsList[i];
        pokeConvertedHtml.innerHTML = convertPokemonStatToHtml(pokemon);
    }
})
})

const urlEvolution = `https://pokeapi.co/api/v2/evolution-chain/`;

 fetch(urlEvolution)
.then((response)=> response.json())
.then((jsonBody)=> console.log(jsonBody.results))
.then((pokemonPage)=> pokeStartHtml.innerHTML = convertPokemonStartToHtml(pokemonPage))
.then((pokemonEvolutionList)=> {
pokemonEvolution.addEventListener('click', ()=>{
    for (let i = 0; i < pokemonEvolutionList.length; i++) {
        const pokemon = pokemonEvolutionList[i];
        pokeConvertedHtml.innerHTML = convertPokemonEvolutionToHtml(pokemon);
    }
})
})

const urlMoves = `https://pokeapi.co/api/v2/move/`;

 fetch(urlMoves)
.then((response)=> response.json())
.then((jsonBody)=> console.log(jsonBody.results))
.then((pokemonPage)=> pokeStartHtml.innerHTML = convertPokemonStartToHtml(pokemonPage))
.then((pokemonMovesList)=> {
pokemonMoves.addEventListener('click', ()=>{
    for (let i = 0; i < pokemonMovesList.length; i++) {
        const pokemon = pokemonMovesList[i];
        pokeConvertedHtml.innerHTML = convertPokemonMovesToHtml(pokemon);
    }
})
})



