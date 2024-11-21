import { motion } from "motion/react";

const FramerMotion = ({ children, initial, whileInView}) => {
  return (
    <motion.div
      initial={initial}
      whileInView={whileInView}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default FramerMotion;
