import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GameLayout from "./GameLayout";
import GameHeader from "./GameHeader";
import MemoryBoard from "./MemoryBoard";
import { getRandomAnimals } from "../../utils/animals";
import BackCard from "../../assets/img/back-card.jpeg";

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
    switch(difficulty) {
      case "Fácil": return 4;
      case "Medio": return 5;
      case "Difícil": return 6;
      default: return 4;
    }
  };

  const handleCardClick = (index, animal) => {
    new Audio(animal.sound).play();
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <GameLayout backgroundImage="src/assets/img/bg-image-game.webp">
      <GameHeader 
        onBack={() => window.history.back()} 
        musicFile="src/assets/audio/home-music.mp3" 
      />
      
      <MemoryBoard
        cards={random_animal_list}
        flippedCards={flippedCards}
        onCardClick={handleCardClick}
        difficulty={difficulty}
      />
    </GameLayout>
  );
}