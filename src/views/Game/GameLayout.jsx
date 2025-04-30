import { motion } from "framer-motion";
import { containerVariants } from "../../utils/animations";

export default function GameLayout({ children, backgroundImage }) {
  return (
    <motion.main
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className={`max-w-screen min-h-screen w-full h-full flex flex-col bg-no-repeat bg-bottom bg-cover`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.main>
  );
}
