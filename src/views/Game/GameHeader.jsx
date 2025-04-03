import { motion } from "framer-motion";
import { itemVariants } from "../../utils/animations";
import MusicPlayer from "../../partials/MusicPlayer";
import BackArrow from "../../assets/svgs/back-arrow.svg";

export default function GameHeader({ onBack, musicFile }) {
  return (
    <div className="w-screen flex justify-between p-4">
      <motion.img
        src={BackArrow}
        className="w-18 h-18 flex items-center justify-center text-white rounded-full shadow-lg transition-transform transform hover:scale-110"
        onClick={onBack}
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
      <motion.div variants={itemVariants}>
        <MusicPlayer audio_file={musicFile} />
      </motion.div>
    </div>
  );
}