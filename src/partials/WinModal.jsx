import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import LionWin from "/lion_win.svg";

export default function WinModal({ onClose, show }) {
  const { width, height } = useWindowSize();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {showConfetti && (
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          gravity={0.2}
        />
      )}

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        style={{ backgroundColor: "#FEEBCD" }}
        className="bg-gradient-to-br rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-xl relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-white opacity-10"></div>

        <h1 className="text-amber-800 text-xl mb-6 relative z-10">
          ¡Felicidades Ganaste! 🎉
        </h1>
        <h3 className="text-amber-800 text-2xl relative z-10">
          🏆 ¡Eres increíble! 🏆
        </h3>

        <img src={LionWin} className="m-auto w-4/5" alt="Lion Win" />

        <div className="flex gap-5">
          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full text-lg shadow-md relative z-10 m-auto"
          >
            Volver a jugar
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: [0, -5, 5, -5, 5, 0] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              onClose();
              window.location.href = "/niveles";
            }}
            className="bg-white text-purple-600 font-bold py-3 px-6 rounded-full text-lg shadow-md relative z-10 m-auto"
          >
            Más niveles
          </motion.button>
        </div>

        {/* Efectos decorativos */}
        <div className="absolute -top-10 -left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20"></div>
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
      </motion.div>
    </div>
  );
}
