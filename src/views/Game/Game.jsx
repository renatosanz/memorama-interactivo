import React from "react";
import { useLocation } from "react-router-dom";

export default function Game() {
  // Obtener el estado de la navegación
  const location = useLocation();
  const difficulty = location.state?.difficulty || "Fácil"; // Valor por defecto

  // Determinar el número de animales según la dificultad
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

  const animalCount = getAnimalCount();

  return (
    <div>
      <h1>Modo de Juego: {difficulty}</h1>
      <p>Número de animales: {animalCount}</p>
      {/* Aquí iría tu lógica del memorama */}
    </div>
  );
}
