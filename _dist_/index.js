import { registerImage } from "./lazy.js";

console.log('Happy hacking :)')

const API = "https://randomfox.ca/floof";
const add = document.querySelector("#add");
const clean = document.querySelector("#clean");
const div = document.querySelector("#images");

function addImage(url) {
    const container = document.createElement("div");
    container.className = "p-4";
    container.className = "bg-gray-300";
    container.style.minHeight = "100px";
    container.style.display = "inline-block";

    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.width = '320';
    imagen.dataset.src = url;

    container.appendChild(imagen);

    appendedImages++;
    printLog();

    return container;
};

function getData() { window
    .fetch(API)
    .then(respuesta => respuesta.json())
    .then(responseJson => {
        const url = responseJson.image;
        const newImage = addImage(url);
        div.appendChild(newImage);
        registerImage(newImage);
    });
};

add.addEventListener('click', getData);
clean.addEventListener('click', () => {
    div.innerHTML = '';
    appendedImages = 0;
    loadedImages = 0;
});

/* const random = max => Math.floor((Math.random()* max -1) + 1);

const createImageNode = () => {
    const contain = document.createElement('div');
    contain.className = "p-4";
    const imagen = document.createElement('img');
    imagen.className = 'mx-auto';
    imagen.width = '320';
    imagen.src = `https://randomfox.ca/images/${random(122)}.jpg`;
    contain.appendChild(imagen);

    return contain;
};
const mountNode = document.getElementById('images');

const addImage = document.querySelector('button');
const accion = () => {
    const newImage = createImageNode();
    mountNode.appendChild(newImage);
    registerImage(newImage);
}
addImage.addEventListener('click', accion); */