import { motion } from "framer-motion";

export default function Card({ 
  frontImage, 
  backImage, 
  isFlipped, 
  onClick,
  variants
}) {
  return (
    <motion.div
      className="relative rounded-lg shadow-lg cursor-pointer"
      style={{ width: "10vw", height: "25vh" }}
      variants={variants}
    >
      <motion.div
        className={`absolute p-2 w-full h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
        }}
        onClick={onClick}
      >
        <img src={backImage} className="object-contain h-full" />
      </motion.div>
      <motion.div
        className={`absolute w-full p-2 h-full bg-white rounded-lg shadow-lg flex items-center justify-center backface-hidden ${
          isFlipped ? "rotate-y-0" : "rotate-y-180"
        }`}
        style={{
          transformStyle: "preserve-3d",
          transition: "transform 0.6s",
        }}
      >
        <img src={frontImage} alt="Animal" className="object-contain h-full" />
      </motion.div>
    </motion.div>
  );
}