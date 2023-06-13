import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const Reveal = ({ children, animationType }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) mainControls.start('visible');
  }, [isInView, mainControls]);

  const getAnimationVariants = () => {
    switch (animationType) {
      case 'fadeInUp':
        return { opacity: 0, y: 75 };
      case 'fadeInDown':
        return { opacity: 0, y: -75 };
      case 'fadeInRight':
        return { opacity: 0, x: -75 };
      case 'fadeInLeft':
        return { opacity: 0, x: 75 };
      default:
        return { opacity: 0, y: 75 };
    }
  };

  const animationVariants = getAnimationVariants();

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      <motion.div
        variants={{
          hidden: animationVariants,
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 1, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
