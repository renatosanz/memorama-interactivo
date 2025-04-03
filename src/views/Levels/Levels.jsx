import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  containerVariants,
  itemVariants,
  cardVariants,
  buttonVariants,
} from "../../utils/animations";
import { difficultyCards } from "../../utils/difficultyCards";

import "./Levels.css";

import MusicPlayer from "../../partials/MusicPlayer";
import BackArrow from "../../assets/svgs/back-arrow.svg";

export default function Levels() {
  const navigate = useNavigate();
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);

  const handleStartGame = () => {
    if (selectedDifficulty) {
      navigate("/juego", { state: { difficulty: selectedDifficulty } });
    }
  };

  return (
    <motion.main
      className="w-screen h-screen flex flex-col bg-[url(src/assets/img/bg-image-levels.webp)] bg-no-repeat bg-bottom bg-cover"
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
        className="m-auto w-5/6 h-5/6 rounded-3xl flex flex-col items-center justify-center p-6 backdrop-blur-xs"
        variants={containerVariants}
      >
        <motion.h1
          className="texto-borde text-4xl font-bold mb-6"
          variants={itemVariants}
        >
          Selecciona la Dificultad
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-10">
          {difficultyCards.map((card, i) => (
            <motion.div
              key={card.level}
              className={`${
                card.color
              } rounded-2xl p-6 cursor-pointer shadow-xl border-4 ${
                selectedDifficulty === card.level
                  ? "border-white"
                  : "border-transparent"
              }`}
              variants={cardVariants}
              custom={i}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSelectedDifficulty(card.level)}
            >
              <h2 className="text-2xl font-bold text-dark text-center mb-2">
                {card.level}
              </h2>
              <p className="text-dark text-lg text-center mb-3">
                {card.description}
              </p>
              <p className="text-4xl text-center">{card.emoji}</p>
            </motion.div>
          ))}
        </div>

        <motion.button
          className={`boton-jugar ${
            !selectedDifficulty ? "opacity-50 cursor-not-allowed" : ""
          }`}
          variants={buttonVariants}
          whileHover={selectedDifficulty ? "hover" : {}}
          whileTap={selectedDifficulty ? "tap" : {}}
          onClick={handleStartGame}
          disabled={!selectedDifficulty}
        >
          Jugar
        </motion.button>
      </motion.section>
    </motion.main>
  );
}
