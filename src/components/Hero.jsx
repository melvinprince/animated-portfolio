import { Canvas } from "@react-three/fiber";
import "./styles/hero.scss";
import { motion } from "framer-motion";
import { Experience } from "./Experience";
import { useEffect, useState } from "react";

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
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({
        x: (e.clientX / window.innerWidth) * 2 - 1, // Normalize to -1 to 1
        y: -(e.clientY / window.innerHeight) * 2 + 1, // Invert Y-axis
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="text-container">
          <h2>Melvin Prince</h2>
          <h1>Full Stack Web and Blockchain Developer</h1>
          <div className="buttons">
            <button>See the latest works</button>
            <button>Contact me</button>
          </div>
          <img animate="scrollImgAnimation" src="/scroll.png" alt="" />
        </div>
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
          <Experience cursorPos={cursorPos} />
        </Canvas>
      </div>
    </div>
  );
}
