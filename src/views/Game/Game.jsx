import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../../utils/animations";
import "./Game.css";

import BackCard from "../../assets/img/back-card.jpeg";

import MusicPlayer from "../../partials/MusicPlayer";
import BackArrow from "../../assets/svgs/back-arrow.svg";
import { getRandomAnimals } from "../../utils/animals";

export default function Game() {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Fácil"; // Valor por defecto
  const [random_animal_list, setRandomAnimalList] = useState([]);
  const [animalCount, setAnimalCount] = useState();

  useEffect(() => {
    // Obtener una lista aleatoria de animales según la dificultad seleccionada
    const randomAnimals = getRandomAnimals(getAnimalCount());
    setRandomAnimalList(randomAnimals);
    setAnimalCount(getAnimalCount());
  }, [animalCount]);

  const getAnimalCount = () => {
    switch (difficulty) {
      case "Fácil":
        return 4;
      case "Medio":
        return 5;
      case "Difícil":
        return 6;
      default:
        return 4;
    }
  };

  // Estado para rastrear las cartas volteadas
  const [flippedCards, setFlippedCards] = useState({});

  const handleCardClick = (index, animalImg) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: prev[index] ? null : animalImg, // Alterna entre mostrar el reverso y la imagen del animal
    }));
  };

  return (
    <motion.main
      className="w-screen h-screen flex flex-col bg-[url(src/assets/img/bg-image-game.webp)] bg-no-repeat bg-bottom bg-cover"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="w-screen flex justify-between p-4">
        <motion.img
          src={BackArrow}
          className="w-18 h-18 flex items-center justify-center text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
          onClick={() => window.history.back()}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        ></motion.img>
        <motion.div variants={itemVariants}>
          <MusicPlayer audio_file={"src/assets/audio/home-music.mp3"} />
        </motion.div>
      </div>

      <motion.section
        className="m-auto w-7/8 h-7/8 rounded-3xl flex flex-col items-center p-6 backdrop-blur-xs"
        variants={containerVariants}
      >
        <motion.h1
          className="texto-borde text-4xl font-bold mb-6"
          variants={itemVariants}
        >
          Nivel {difficulty}
        </motion.h1>

        {/* Área de memorama */}
        <div
          className={`grid 
  ${
    random_animal_list.length <= 4
      ? "grid-cols-2 md:grid-cols-4"
      : random_animal_list.length <= 6
      ? "grid-cols-3 md:grid-cols-6"
      : "grid-cols-4 md:grid-cols-8"
  } 
  gap-4 p-4`}
        >
          {random_animal_list.map((animal, index) => (
            <motion.div
              key={index}
              className={`bg-white rounded-lg p-2 shadow-lg flex items-center justify-center`}
              variants={itemVariants}
            >
              <img
                src={flippedCards[index] ? animal.img : BackCard}
                alt={animal.name}
                className={`cursor-pointer object-contain 
          ${
            random_animal_list.length <= 4
              ? "h-24 md:h-42"
              : random_animal_list.length <= 6
              ? "h-20 md:h-48"
              : "h-16 md:h-44"
          }`}
                onClick={() => handleCardClick(index, animal.img)}
              />
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.main>
  );
}
