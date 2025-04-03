// Animaciones
export const containerVariants = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "backOut",
    },
  },
};

export const cardVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: (i) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.3 + i * 0.2,
      type: "spring",
      stiffness: 300,
    },
  }),
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  selected: {
    scale: 1.05,
    boxShadow: "0 0 20px rgba(255, 255, 0, 0.7)",
    borderColor: "#FFD700",
  },
};

export const buttonVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.9,
      type: "spring",
      stiffness: 300,
      damping: 10,
    },
  },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};
