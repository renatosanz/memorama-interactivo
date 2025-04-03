import { motion } from "framer-motion";
import { containerVariants } from "../../utils/animations";

export default function GameLayout({ children, backgroundImage }) {
  return (
    <motion.main
      className={`w-screen h-screen flex flex-col bg-[url(${backgroundImage})] bg-no-repeat bg-bottom bg-cover`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {children}
    </motion.main>
  );
}
