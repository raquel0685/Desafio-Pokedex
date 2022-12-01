const pokemonList = document.getElementById('pokemonList');
const loadPokemons = document.getElementById('load__more');

const pokeStartHtml = document.getElementById('pokemon__start');
const pokeConvertedHtml = document.getElementById('pokemon__convert');

const pokemonAbout = document.getElementById('about');
const pokemonStats = document.getElementById('stats');
const pokemonEvolution = document.getElementById('evolution');
const pokemonMoves = document.getElementById('moves');

const limit = 10;
const maxRecords = 1154;
let offset = 0;

function convertPokemonToLi(pokemon){
    return `
<li class="pokemon ${pokemon.type}">

    <span class="number">#${pokemon.number}</span>
    <span class="name"><a class="info" href="./info.html">${pokemon.name}</a></span>

    <div class="details">

        <ol class="types">
        ${pokemon.types.map((type)=> `<li class="type ${pokemon.type}">${type}</li>`).join('')}
        </ol>

         <img
            src="${pokemon.photo}"
            alt="${pokemon.name}"
            />
    </div>
</li>
    `
}

function loadMorePokemons(offset,limit){
    PokeApi.getPokemons(offset,limit)
    .then((pokemons = [])=>{  
      const newHtml = pokemons.map(convertPokemonToLi).join('');
      pokemonList.innerHTML += newHtml;
    });
}
loadMorePokemons(offset,limit)

loadPokemons.addEventListener('click',()=>{
    offset += limit;

    const quantidadeNextPage = offset + limit;

    if(quantidadeNextPage >= maxRecords){
        const newLimit = quantidadeNextPage - maxRecords ; 
        loadMorePokemons(offset, newLimit);

        loadPokemons.parentElement.removeChild(loadPokemons);

    } else{
        loadMorePokemons(offset, limit);
    }
});

function convertPokemonStartToHtml(pokemon){
  return `
  <div class="return">
        <a href="./index.html"
          ><button id="button__return" type="button">
            <i class="fas fa-long-arrow-left"></i></button
        ></a>
      </div>
      <div class="pokemon__detail__id">
        <span>#001</span>
      </div>
      <div class="pokemon__detail__title">
        <h1>Bulbasaur</h1>
        <ol>
          <li>grass</li>
          <li>poison</li>
        </ol>
      </div>

      <div class="pokemon__details__img">
        <img
          class="pokemon__detail__image"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"
          alt="Bulbasaur"
        />
      </div>
  `
}

function convertPokemonAboutToHtml(pokemon){
    return `
    <table>
          <tr>
            <td class="table__name">Species</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Height</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Weight</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Abilities</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
        </table>

        <h4>Breeding</h4>

        <table>
          <tr>
            <td class="table__name">Gender</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Egg Groups</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Egg Cycle</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
        </table>
    `
    
};

function convertPokemonStatToHtml(pokemon){ 
    return `
    <table>
          <tr>
            <td class="table__name">HP</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Attack</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Defense</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Special Attack</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Special Defense</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Speed</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Total</td>
            <td class="table__info">Bulbasaur</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
        </table>
    `
}
function convertPokemonEvolutionToHtml(pokemon){ 
    return `
    <table>
          <tr>
            <td class="table__name">Trigger</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Gender</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Item</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Move</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Location</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Minimal Level</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Minimal Affection</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Rain</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Time of Day</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
        </table>
    `
}
function convertPokemonMovesToHtml(pokemon){
    return `
    <table>
          <tr>
            <td class="table__name">Name</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Accuracy</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Effectiveness</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Points</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Damage</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Pokemons That Can Learn</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
          <tr>
            <td class="table__name">Target</td>
            <td class="table__info">Bulbasaur</td>
          </tr>
        </table>
      </div>
    `
}





