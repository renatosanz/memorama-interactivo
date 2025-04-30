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
      case 12: return "grid-cols-3 md:grid-cols-6";
      default: return "grid-cols-2 md:grid-cols-4";
    }
  };

  const getCardStyles = () => {
    switch(cards.length) {
      case 8: return "w-30 aspect-2/3 md:w-80% md:aspect-3/4 lg:w-40 lg:aspect-4/5";
      case 10: return "w-30 aspect-2/3 md:w-80% md:aspect-3/4 lg:w-40 lg:aspect-4/5";
      case 12: return "w-30 aspect-3/5 md:w-80% md:aspect-3/4 lg:w-40 lg:aspect-4/5";
      default: return "w-30 aspect-2/3 md:w-40 md:aspect-4/5 lg:w-40 lg:aspect-4/5";
    }
  };

  return (
    <motion.section
      className="m-auto w-7/8 h-7/8 rounded-3xl flex flex-col items-center  backdrop-blur-xs"
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
            style={getCardStyles}
          />
        ))}
      </div>
    </motion.section>
  );
}