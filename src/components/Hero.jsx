import { Canvas } from "@react-three/fiber";
import "./styles/hero.scss";
import { motion } from "framer-motion";
import { Experience } from "./Experience";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollImgAnimation: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Melvin Prince</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web and Blockchain Developer
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              See the latest works
            </motion.button>
            <motion.button variants={textVariants}>Contact me</motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollImgAnimation"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="sliding-text"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Software Engineer
      </motion.div>
      <div className="avatar-container">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <Experience />
        </Canvas>
      </div>
    </div>
  );
}
