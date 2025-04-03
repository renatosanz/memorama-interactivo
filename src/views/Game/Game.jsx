import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GameLayout from "./GameLayout";
import GameHeader from "./GameHeader";
import MemoryBoard from "./MemoryBoard";
import { getRandomAnimals } from "../../utils/animals";
import BgGame from "../../assets/img/bg-image-game.webp";
import HappyMusic from "../../assets/audio/happy-music.mp3";

export default function Game() {
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Fácil";
  const [random_animal_list, setRandomAnimalList] = useState([]);
  const [flippedCards, setFlippedCards] = useState({});

  useEffect(() => {
    const animalCount = getAnimalCount();
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

  const handleCardClick = (index, animal) => {
    new Audio(animal.sound).play();
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
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
    </GameLayout>
  );
}
