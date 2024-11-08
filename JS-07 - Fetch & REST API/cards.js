const IMAGE_URL = "https://placehold.co/200";
const CARD_CONTAINER = document.getElementById("container");
const CARD = document.getElementById("card");
const IMG_CONTAINER = document.getElementById("img-container");

const fetchUserData = () => {
        return {
            id: 1,
            username: 'User Name',
            description: 'Lorem Ipsum',
            age: 25,
            fav_music: {
                bands: [
                    "Temerarios",
                    "Los Panchos",
                    "Los Acosta",
                    "Los Yonics",
                    "Las Jilguerillas",
                ],
            },
        };
};

const USERDATA = fetchUserData();

console.log(fetchUserData);

// IMG
const image = document.createElement("img");
image.src = IMAGE_URL;
image.alt = "Placeholder user photo";

// CARD INFO
const userName = document.createElement('H3');
const description = document.createElement("P");
const age = document.createElement("p");
const bands = document.createElement("ul");
// const bands = 

console.log(USERDATA);

const bandList = USERDATA.fav_music.bands.map(e => {
    const item = document.createElement('li');
    item.textContent = e;
    return item;
});

// CARD DATA
userName.textContent = USERDATA.username;
description.textContent = USERDATA.description;
age.textContent = USERDATA.age;
// --

IMG_CONTAINER.appendChild(image);
bands.append(...bandList);
CARD.append(userName, description, age, bands);

document.getElementById("btn-hide").addEventListener('click' , () => {
    CARD_CONTAINER.style.visibility = CARD_CONTAINER.style.visibility === 'hidden' ? 'visible' : 'hidden';
});