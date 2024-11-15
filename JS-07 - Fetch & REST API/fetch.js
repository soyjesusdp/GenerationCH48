const API_URL = "https://pokeapi.co/api/v2/";

// Función para obtener el Pokémon desde la API
const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${API_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
};

// Función para mostrar la tarjeta del Pokémon en el DOM
function displayPokemonCard(pokemon) {
    const cardContainer = document.querySelector(".card--container");
    cardContainer.innerHTML = `
        <div class="card">
            <h2>${pokemon.name}</h2>
            <p>ID: ${pokemon.id}</p>
            <p>Weight: ${pokemon.weight}</p>
            <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
        </div>
    `;
}

// Evento para cargar el Pokémon guardado en localStorage al iniciar la página
document.addEventListener("DOMContentLoaded", () => {
    const savedPokemon = localStorage.getItem("pokemonData");
    if (savedPokemon) {
        const pokemon = JSON.parse(savedPokemon);
        displayPokemonCard(pokemon);
    }
});

// Evento para el botón "Get Pokemon"
document.getElementById("get-btn").addEventListener("click", async () => {
    const text = document.getElementById("poke-name").value.toLowerCase();
    const pokemon = await fetchPokemon(text);
    if (pokemon) {
        localStorage.setItem("pokemonId", pokemon.id);
        localStorage.setItem("pokemonData", JSON.stringify(pokemon));
        displayPokemonCard(pokemon);
    }
});

// Evento para el botón "Previous" (para ir al Pokémon anterior)
document.getElementById('prev-btn').addEventListener('click', async () => {
    const currentPokemonId = localStorage.getItem("pokemonId");
    const newId = Math.max(1, parseInt(currentPokemonId) - 1);
    const pokemon = await fetchPokemon(newId);
    if (pokemon) {
        localStorage.setItem("pokemonId", pokemon.id);
        localStorage.setItem("pokemonData", JSON.stringify(pokemon));
        displayPokemonCard(pokemon);
    }
});

// Evento para el botón "Next" (para ir al siguiente Pokémon)
document.getElementById('next-btn').addEventListener('click', async () => {
    const currentPokemonId = localStorage.getItem("pokemonId");
    const newId = parseInt(currentPokemonId) + 1;
    const pokemon = await fetchPokemon(newId);
    if (pokemon) {
        localStorage.setItem("pokemonId", pokemon.id);
        localStorage.setItem("pokemonData", JSON.stringify(pokemon));
        displayPokemonCard(pokemon);
    }
});

//¿Quien es ese pokemon?