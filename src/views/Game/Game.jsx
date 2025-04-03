import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GameLayout from "./GameLayout";
import GameHeader from "./GameHeader";
import MemoryBoard from "./MemoryBoard";
import { getRandomAnimals } from "../../utils/animals";
import BgGame from "../../assets/img/bg-image-game.webp";
import HappyMusic from "../../assets/audio/happy-music.mp3";
import WinModal from "../../partials/WinModal";

export default function Game() {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Fácil";
  const [random_animal_list, setRandomAnimalList] = useState([]);
  const [animalCount, setAnimalCount] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});
  const [selectedCards, setSelectedCards] = useState([]);
  const [showWinModal, setShowWinModal] = useState(false);

  useEffect(() => {
    const animalCount = getAnimalCount();
    setAnimalCount(animalCount);
    setRandomAnimalList(getRandomAnimals(animalCount));
  }, [difficulty]);

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

  // Parte esencial del juego
  const handleCardClick = (index, animal) => {
    // si ya hay dos cartas volteadas, no permitir más clics
    if (selectedCards.length === 2) return;
    new Audio(animal.sound).play();

    // voltear la carta seleccionada
    setFlippedCards((prev) => ({ ...prev, [index]: true }));
    setSelectedCards((prev) => [...prev, { index, animal }]);

    // si no hay cartas seleccionadas, no hacer nada pero si hay una carta seleccionada, entonces se verifica si las cartas coinciden
    if (selectedCards.length === 1) {
      const [firstCard] = selectedCards;
      if (firstCard.animal.name === animal.name) {
        setSelectedCards([]);
        if (animalCount - 1 != 0) {
          setAnimalCount(animalCount - 1);
        } else {
          // Si no hay más cartas ocultas, mostrar mensaje de victoria
          //alert("¡Felicidades! Has ganado el juego.");
          setShowWinModal(true);
        }
      } else {
        // si no coinciden se vuelven a ocultar
        setTimeout(() => {
          setFlippedCards((prev) => ({
            ...prev,
            [firstCard.index]: false,
            [index]: false,
          }));
          setSelectedCards([]);
        }, 1000);
      }
    }
  };

  return (
    <GameLayout backgroundImage={BgGame}>
      <GameHeader onBack={() => window.history.back()} musicFile={HappyMusic} />

      <MemoryBoard
        cards={random_animal_list}
        flippedCards={flippedCards}
        onCardClick={handleCardClick}
        difficulty={difficulty}
      />

      <WinModal
        show={showWinModal}
        onClose={() => {
          setShowWinModal(false);
        }}
      />
    </GameLayout>
  );
}
