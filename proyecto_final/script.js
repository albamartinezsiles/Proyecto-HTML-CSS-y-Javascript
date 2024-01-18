const botones = document.querySelectorAll(".caja_livery button"); // Seleccionar con querySelectorAll todos los botones
let foto = document.querySelector(".caja_livery img"); // Seleccionar con querySelector la imagen
let imgActual = 0; // Índice de la imagen actual
let rutas = ['img/livery1.jpg', 'img/livery2.jpg', 'img/livery3.jpg','img/livery4.jpg','img/livery5.jpg','img/livery6.jpg','img/livery7.jpg',]; // Array con todas las rutas de las imágenes disponibles

botones.forEach((boton) => { // Recorre todos los botones
    boton.addEventListener('click', () => { // Cuando haces click en un botón...
        imgActual = (imgActual + 1) % rutas.length; // Avanza a la siguiente imagen (si llega al final lo sabes por rutas.lenght, vuelve al principio)
        foto.src = rutas[imgActual]; // Cambia el src de la imagen, es decir, cámbiame la imagen por la siguiente de array
    });
});
