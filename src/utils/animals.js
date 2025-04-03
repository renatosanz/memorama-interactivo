// Lista de animales con sus respectivas imágenes y sonidos
export const animals = [
  {
    name: "caballo",
    img: "src/assets/img_animals/caballo.webp",
    sound: "src/assets/sounds_animals/Caballo.mp3",
  },
  {
    name: "caracol",
    img: "src/assets/img_animals/caracol.webp",
    sound: "src/assets/sounds_animals/Caracol.mp3",
  },
  {
    name: "cerdo",
    img: "src/assets/img_animals/cerdo.webp",
    sound: "src/assets/sounds_animals/Cerdo.mp3",
  },
  {
    name: "conejo",
    img: "src/assets/img_animals/conejo.webp",
    sound: "src/assets/sounds_animals/Conejo.mp3",
  },
  {
    name: "erizo",
    img: "src/assets/img_animals/erizo.webp",
    sound: "src/assets/sounds_animals/Erízo.mp3",
  },
  {
    name: "gallo",
    img: "src/assets/img_animals/gallo.webp",
    sound: "src/assets/sounds_animals/Gallo.mp3",
  },
  {
    name: "gato",
    img: "src/assets/img_animals/gato.webp",
    sound: "src/assets/sounds_animals/Gato.mp3",
  },
  {
    name: "loro",
    img: "src/assets/img_animals/loro.webp",
    sound: "src/assets/sounds_animals/Loro.mp3",
  },
  {
    name: "mariposa",
    img: "src/assets/img_animals/mariposa.webp",
    sound: "src/assets/sounds_animals/Mariposa.mp3",
  },
  {
    name: "oveja",
    img: "src/assets/img_animals/oveja.webp",
    sound: "src/assets/sounds_animals/Oveja.mp3",
  },
  {
    name: "pato",
    img: "src/assets/img_animals/pato.webp",
    sound: "src/assets/sounds_animals/Pato.mp3",
  },
  {
    name: "perro",
    img: "src/assets/img_animals/perro.webp",
    sound: "src/assets/sounds_animals/Perro.mp3",
  },
  {
    name: "pez dorado",
    img: "src/assets/img_animals/pez dorado.webp",
    sound: "src/assets/sounds_animals/Pez Dorado.mp3",
  },
  {
    name: "ratón",
    img: "src/assets/img_animals/ratón.webp",
    sound: "src/assets/sounds_animals/Ratón.mp3",
  },
  {
    name: "tortuga",
    img: "src/assets/img_animals/tortuga.webp",
    sound: "src/assets/sounds_animals/Tortuga.mp3",
  },
];
// Función para obtener un número aleatorio de animales en pares
export const getRandomAnimals = (count) => {
  const shuffledAnimals = [...animals].sort(() => 0.5 - Math.random());
  const selectedAnimals = shuffledAnimals.slice(0, count);
  const pairedAnimals = [...selectedAnimals, ...selectedAnimals];
  return pairedAnimals.sort(() => 0.5 - Math.random());
};
