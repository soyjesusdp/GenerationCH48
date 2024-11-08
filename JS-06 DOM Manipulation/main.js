// Array de usuarios, cada objeto representa un usuario con su información
const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: ['Band 1', 'Band 2', 'Band 3', 'Band 4']
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: ['Band 1', 'Band 2', 'Band 3', 'Band 4']
        }
    }
];

// Función para crear una tarjeta para un usuario
function createCard(user) {
    // Aquí formateas y organizas la información del usuario en una "tarjeta"
    // Puedes devolver un string con el contenido de la tarjeta o un objeto HTML si estás trabajando en una página web
    return `
        <div class="card">
            <h2>${user.user_name}</h2>
            <p>Age: ${user.age}</p>
            <p>${user.description}</p>
            <p>Favorite Bands:</p>
            <ul>
                ${user.fav_music.bands.map(band => `<li>${band}</li>`).join('')}
            </ul>
        </div>
    `;
}

// Función para procesar todos los usuarios y crear una tarjeta para cada uno
function generateCards(usersArray) {
    // Aquí recorremos el array de usuarios y usamos createCard para cada uno
    // Almacena todas las tarjetas en un array o úsalas directamente
    return usersArray.map(user => createCard(user)).join('');
}

// Función para mostrar todas las tarjetas generadas
function displayCards(cards) {
    // Si trabajas en la consola, usa console.log(cards);
    // Si trabajas en HTML, usa document.body.innerHTML o un contenedor específico
    document.getElementById("card-container").innerHTML = cards;
}

// Ejecución del código para generar y mostrar tarjetas
const allCards = generateCards(users); // Genera todas las tarjetas
displayCards(allCards); // Muestra las tarjetas en el contenedor de HTML
