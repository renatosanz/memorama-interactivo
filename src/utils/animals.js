// Importar imágenes
import caballoImg from "../assets/img_animals/caballo.webp";
import caracolImg from "../assets/img_animals/caracol.webp";
import cerdoImg from "../assets/img_animals/cerdo.webp";
import conejoImg from "../assets/img_animals/conejo.webp";
import erizoImg from "../assets/img_animals/erizo.webp";
import galloImg from "../assets/img_animals/gallo.webp";
import gatoImg from "../assets/img_animals/gato.webp";
import loroImg from "../assets/img_animals/loro.webp";
import mariposaImg from "../assets/img_animals/mariposa.webp";
import ovejaImg from "../assets/img_animals/oveja.webp";
import patoImg from "../assets/img_animals/pato.webp";
import perroImg from "../assets/img_animals/perro.webp";
import pezDoradoImg from "../assets/img_animals/pez dorado.webp";
import ratonImg from "../assets/img_animals/ratón.webp";
import tortugaImg from "../assets/img_animals/tortuga.webp";

// Importar audios
import caballoSound from "../assets/sounds_animals/Caballo.mp3";
import caracolSound from "../assets/sounds_animals/Caracol.mp3";
import cerdoSound from "../assets/sounds_animals/Cerdo.mp3";
import conejoSound from "../assets/sounds_animals/Conejo.mp3";
import erizoSound from "../assets/sounds_animals/Erízo.mp3";
import galloSound from "../assets/sounds_animals/Gallo.mp3";
import gatoSound from "../assets/sounds_animals/Gato.mp3";
import loroSound from "../assets/sounds_animals/Loro.mp3";
import mariposaSound from "../assets/sounds_animals/Mariposa.mp3";
import ovejaSound from "../assets/sounds_animals/Oveja.mp3";
import patoSound from "../assets/sounds_animals/Pato.mp3";
import perroSound from "../assets/sounds_animals/Perro.mp3";
import pezDoradoSound from "../assets/sounds_animals/Pez Dorado.mp3";
import ratonSound from "../assets/sounds_animals/Ratón.mp3";
import tortugaSound from "../assets/sounds_animals/Tortuga.mp3";

// Lista de animales con sus respectivas imágenes y sonidos
export const animals = [
  { name: "caballo", img: caballoImg, sound: caballoSound },
  { name: "caracol", img: caracolImg, sound: caracolSound },
  { name: "cerdo", img: cerdoImg, sound: cerdoSound },
  { name: "conejo", img: conejoImg, sound: conejoSound },
  { name: "erizo", img: erizoImg, sound: erizoSound },
  { name: "gallo", img: galloImg, sound: galloSound },
  { name: "gato", img: gatoImg, sound: gatoSound },
  { name: "loro", img: loroImg, sound: loroSound },
  { name: "mariposa", img: mariposaImg, sound: mariposaSound },
  { name: "oveja", img: ovejaImg, sound: ovejaSound },
  { name: "pato", img: patoImg, sound: patoSound },
  { name: "perro", img: perroImg, sound: perroSound },
  { name: "pez dorado", img: pezDoradoImg, sound: pezDoradoSound },
  { name: "ratón", img: ratonImg, sound: ratonSound },
  { name: "tortuga", img: tortugaImg, sound: tortugaSound },
];

// Función para obtener un número aleatorio de animales en pares
export const getRandomAnimals = (count) => {
  const shuffledAnimals = [...animals].sort(() => 0.5 - Math.random());
  const selectedAnimals = shuffledAnimals.slice(0, count);
  const pairedAnimals = [...selectedAnimals, ...selectedAnimals];
  return pairedAnimals.sort(() => 0.5 - Math.random());
};
