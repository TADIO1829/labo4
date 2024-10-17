//OBJETOS
const movie = {
    title: "Venom 3",
    director: "Andy Serkis",
    releaseYear: 2024,
    cast: {
        mainActor: "Tom Hardy",
        villain: "Woody Harrelson",
        supportingActor: "Michelle Williams"
    },
    genres: ['Action', 'Sci-Fi', 'Thriller'],
    isReleased: false,
    playTrailer () {
        return `Playing trailer for ${this.title}`;
    },
    sendPremiereNotification: function () {
        return `Sending premiere notification to fans of ${this.cast.mainActor}`;
    }
}

console.log(movie.isReleased);
console.log(movie.playTrailer());
console.log(movie.sendPremiereNotification());

//DESTRUCCION DE OBJETOS
const movie2 = {
    title: "Sonríe 2",
    director: "Parker Finn",
    releaseYear: 2024,
    cast: {
        leadActor: "Sosie Bacon",
        supportingActor: "Jessie T. Usher",
        antagonist: "Kyle Gallner"
    },
    boxOffice: {
        budget: "$25M",
        grossWorldwide: "$100M"
    }
}

// Desestructurando título, director, año de estreno y taquilla
// const {title, director, releaseYear, boxOffice} = movie2
// console.log(title, director, releaseYear, boxOffice);

//CONGELAR UN OBJETO
const movie3= {
    title: "Guasón 2",
    director: "Todd Phillips",
    releaseYear: 2024,
    cast: {
        mainActor: "Joaquin Phoenix",
        supportingActress: "Lady Gaga"
    }
}

Object.seal(movie3);

console.log(Object.isSealed(movie3)); 
movie3.releaseYear = 2025; 
console.log(movie3);

movie3.genre = "Drama"; 
console.log(movie3.genre); 

//THIS
const movie4 = {
    title: "Beetlejuice 2",
    director: "Tim Burton",
    releaseYear: 2024,
    cast: {
        mainActor: "Michael Keaton",
        supportingActress: "Winona Ryder"
    },
    genres: ['Comedy', 'Fantasy', 'Horror'],
    isReleased: false,
    playTrailer() {
        return `Playing trailer for ${this.title}`;
    },
    sendPremiereNotification: () => {
        return `Sending premiere notification to fans of ${this.cast.mainActor}`;
    }
}

console.log(movie4.playTrailer());
// Va a provocar un error cuando se trabaje con arrow functions
// console.log(movie.sendPremiereNotification());

//METODOS PARA TRABAJAR 
'use strict';

const movie5= {
    title: "Robot Salvaje",
    director: "Chris Sanders",
    releaseYear: 2024,
    genres: ['Animation', 'Adventure', 'Sci-Fi'],
    cast: {
        leadActor: "Voz",
        voiceActress: "Stephanie Hsu"
    },
    isReleased: false,
    playTrailer() {
        return `Playing trailer for ${this.title}`;
    },
    sendPremiereNotification: () => {
        return `Sending premiere notification to fans of ${this.cast.leadActor}`;
    }
}

console.log("Obtener las claves:", Object.keys(movie5));
console.log("Obtener los valores:", Object.values(movie5));
console.log("Obtener las claves y valores en un array:", Object.entries(movie5));


//---------------------------------------------------------------------------------------
//ARRAYS
const currentMovies = ["Oppenheimer", "Barbie", "Mission: Impossible - Dead Reckoning", "The Nun II"];

const movieDetails = [
    ["Oppenheimer", "Christopher Nolan", "Drama", 2023],
    ["Barbie", "Greta Gerwig", "Comedy", 2023],
    ["Mission: Impossible - Dead Reckoning", "Christopher McQuarrie", "Action", 2023],
    ["The Nun II", "Michael Chaves", "Horror", 2023]
];

const movieShowtimes = ["2:00 PM", "5:00 PM", "8:00 PM"];

const ticketSales = [150, 200, 180, 120];

console.log("Número de películas en cartelera:", currentMovies.length);
console.log("Detalles de películas:", movieDetails);
console.log("Horarios de las funciones:", movieShowtimes);

ticketSales.length > 0 ? console.log("Entradas disponibles para la venta") : console.log("No hay entradas disponibles");

const currentMoviesNEW = ["Oppenheimer", "Barbie", "Mission: Impossible - Dead Reckoning", "The Nun II"];
const ticketPricesNEW = [12.99, 10.50, 15.00, 8.75];
const showtimesNEW = ["2:00 PM", "5:00 PM", "8:00 PM"];

console.log("Número de películas en cartelera:", currentMoviesNEW.length);
console.log("Número de precios de entradas:", ticketPricesNEW.length);
ticketPricesNEW.length > 0 ? console.log("Entradas disponibles para la venta") : console.log("No hay entradas disponibles");


//ITERAR
const movies = ["Guasón 2", "Beetlejuice 2", "Sonríe 2", "El Candidato Honesto", "Aventuras Caninas"];


for (let i = 0; i < movies.length; i++) {
    console.log(movies[i]);
}

movies.forEach((e, i) => console.log(`${i} - ${e}`));

const newMovies = movies.map((e) => `Película: ${e}`);
console.log(movies);
console.log(newMovies);


const movieDetails2 = [
    {
        title: "Guasón 2",
        director: "Todd Phillips",
        releaseYear: 2024
    },
    {
        title: "Beetlejuice 2",
        director: "Tim Burton",
        releaseYear: 2024
    },
    {
        title: "Sonríe 2",
        director: "Parker Finn",
        releaseYear: 2024
    },
    {
        title: "El Candidato Honesto",
        director: "Luis Mandoki",
        releaseYear: 2024
    },
    {
        title: "Aventuras Caninas",
        director: "Jared Stern",
        releaseYear: 2024
    }
];

movieDetails2.forEach(m => console.log(`${m.title} - ${m.director} (${m.releaseYear})`));

//METODOS
// Crear un arreglo inicial de personajes en la película
let characters = ["Elena", "Andrés", "Marta"];

// 1. `push()` – Inserta un elemento al final del arreglo.
characters.push("Diego");
console.log("Después de push:", characters); // ["Elena", "Andrés", "Marta", "Diego"]

// 2. `unshift()` – Inserta un elemento al inicio del arreglo.
characters.unshift("Sofía");
console.log("Después de unshift:", characters); // ["Sofía", "Elena", "Andrés", "Marta", "Diego"]

// 3. `pop()` – Remueve un elemento del final del arreglo.
const removedCharacter = characters.pop();
console.log("Después de pop:", characters); // ["Sofía", "Elena", "Andrés", "Marta"]
console.log("Personaje removido:", removedCharacter); // "Diego"

// 4. `shift()` – Remueve un elemento del principio del arreglo.
const firstRemovedCharacter = characters.shift();
console.log("Después de shift:", characters); // ["Elena", "Andrés", "Marta"]
console.log("Personaje removido del principio:", firstRemovedCharacter); // "Sofía"

// 5. `slice()` – Crea una copia sombra del arreglo.
const charactersCopy = characters.slice();
console.log("Copia del arreglo:", charactersCopy); // ["Elena", "Andrés", "Marta"]

// 6. `Array.isArray()` – Determina si el valor es un arreglo.
console.log("¿Es 'characters' un arreglo?", Array.isArray(characters)); // true
console.log("¿Es 'charactersCopy' un arreglo?", Array.isArray(charactersCopy)); // true

// 7. `length` – Determina el tamaño del arreglo.
console.log("Tamaño del arreglo de personajes:", characters.length); // 3



//DESESTRUCTURACION
const movieDetails5 = ["Misfit", "2024", "Comedy", true, { director: "Orlando Herrera" }, ["Main Actor", "Supporting Actress"]];


const [title, year, genre, isReleased, directorInfo, cast] = movieDetails;

console.log("Título:", title);
console.log("Año de estreno:", year);
console.log("Género:", genre);
console.log("¿Estrenada?", isReleased);
console.log("Información del director:", directorInfo);
console.log("Elenco:", cast);

const [apple, , carrot] = ['🍏', '🍄', '🥕'];
console.log("Fruta:", apple);
console.log("Verdura:", carrot);


const fruits = ['🍈', '🥕', '🍌', '🍉', ['🍅', '🍄', '🍍']];
const marketFruits = fruits[4];
const pineapple = marketFruits[2];
console.log("Piña:", pineapple);

//REST
const [mainCharacter, antagonist, ...supportingCharacters] = ['Arthur Fleck', 'Harley Quinn', 'Thomas Wayne', 'Gotham City', 'Alfred', 'Sofia'];

console.log("Personaje principal:", mainCharacter);       // Arthur Fleck
console.log("Antagonista:", antagonist);                  // Harley Quinn
console.log("Personajes secundarios:", supportingCharacters); // [ 'Thomas Wayne', 'Gotham City', 'Alfred', 'Sofia' ]

//SPREAD
const guasonCharacters = ["Arthur Fleck", "Harley Quinn", "Thomas Wayne", "Gotham City", "Alfred", "Sofia"];
const guasonPets = ["Mister J", "Bubbles", "Coco", "Joker", "Harley Dog", "Penny"];


// Spread operator para combinar los nombres de personajes y mascotas
const allNames = [...guasonCharacters, ...guasonPets];
console.log(allNames);
