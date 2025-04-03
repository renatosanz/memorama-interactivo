import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Home.css";
import MusicPlayer from "../../partials/MusicPlayer";
import { useNavigate } from "react-router-dom";
import { containerVariants, buttonVariants } from "../../utils/animations";
import BgHome from "../../assets/img/bg-image-home.webp";
import HappyMusic from "../../assets/audio/happy-music.mp3";

export default function Home() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handlePlayClick = () => {
    setIsExiting(true);
    setTimeout(() => navigate("/niveles"), 1000); // Duración de la animación
  };

  return (
    <motion.main
      animate={containerVariants}
      style={{ backgroundImage: `url(${BgHome})` }}
      className={`w-screen h-screen flex flex-col bg-no-repeat bg-bottom bg-cover overflow-hidden`}
    >
      <div className="w-screen flex p-4">
        <div className="ml-auto">
          <MusicPlayer audio_file={HappyMusic} />
        </div>
      </div>

      <AnimatePresence>
        {!isExiting && (
          <motion.section
            className="m-auto w-5/6 h-5/6 rounded-3xl flex flex-col items-center justify-center p-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
          >
            <h1 className="texto-borde text-4xl font-bold mb-6 animate-bounce">
              Memorama Interactivo: Aprende con Animales
            </h1>

            <motion.button
              className="boton-jugar"
              onClick={handlePlayClick}
              variants={buttonVariants}
              whileTap="tap"
              exit="exit"
            >
              Jugar
            </motion.button>
          </motion.section>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
