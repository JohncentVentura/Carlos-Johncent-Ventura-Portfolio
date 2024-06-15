import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />

      <motion.div
        className="slide-in slide-in-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-in slide-in-1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-in slide-in-2"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-in slide-in-3"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.6, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-in slide-in-4"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.35, 1] }}
      />

      {/*slide-out********************************************************/}

      <motion.div
        className="slide-out slide-out-0"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.8, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-out slide-out-1"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.6, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-out slide-out-2"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.4, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-out slide-out-3"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 1, 0.35, 1] }}
      />
      <motion.div
        className="slide-out slide-out-4"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1, ease: [0.25, 1, 0.35, 1] }}
      />
    </>
  );
};

export default Transition;
