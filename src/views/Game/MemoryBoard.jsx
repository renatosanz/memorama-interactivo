import { motion } from "framer-motion";
import { itemVariants , containerVariants} from "../../utils/animations";
import Card from "../../partials/Card";
import BackCard from "../../assets/img/back-card.jpeg";

export default function MemoryBoard({ 
  cards, 
  flippedCards, 
  onCardClick,
  difficulty 
}) {
  const getGridClass = () => {
    switch(cards.length) {
      case 8: return "grid-cols-2 md:grid-cols-4";
      case 10: return "grid-cols-2 md:grid-cols-5";
      case 12: return "grid-cols-6 md:grid-cols-6";
      default: return "grid-cols-2 md:grid-cols-4";
    }
  };

  return (
    <motion.section
      className="m-auto w-7/8 h-7/8 rounded-3xl flex flex-col items-center p-6 backdrop-blur-xs"
      variants={containerVariants}
    >
      <motion.h1 className="texto-borde text-4xl font-bold mb-6" variants={itemVariants}>
        Nivel {difficulty}
      </motion.h1>

      <div className={`grid ${getGridClass()} gap-4 p-4`}>
        {cards.map((card, index) => (
          <Card
            key={index}
            frontImage={card.img}
            backImage={BackCard}
            isFlipped={flippedCards[index]}
            onClick={() => onCardClick(index, card)}
            variants={itemVariants}
          />
        ))}
      </div>
    </motion.section>
  );
}