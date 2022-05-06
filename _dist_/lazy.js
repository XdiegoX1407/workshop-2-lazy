const isIntersecting = (entry) => {
    return entry.isIntersecting; //true dentro de la pantalla, false fuera de la pantalla
};

const loadImage = (entry) => {
    const container = entry.target; // este es el container
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    //cargar la imagen
    imagen.src = url;

    loadedImages++;
    printLog();
    // desregistra la imagen o deja de escucharla
    observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});

export const registerImage = (imagen) => {
    observer.observe(imagen);
};