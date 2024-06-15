import { motion } from "framer-motion";

const Transition = (OgComponent) => {
  const transition = { duration: 1, ease: [0.22, 1, 0.36, 1] };

  return () => (
    <>
      <OgComponent />
      <motion.div
        className="slide-in-0"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={transition}
      />

      <motion.div
        className="slide-in-1"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 1 }}
        transition={transition}
      />

      <motion.div
        className="slide-out-0"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={transition}
      />

      <motion.div
        className="slide-out-1"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        exit={{ scaleX: 0 }}
        transition={transition}
      />
    </>
  );
};

export default Transition;
