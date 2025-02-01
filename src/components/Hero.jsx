import { Canvas } from "@react-three/fiber";
import "./styles/hero.scss";
import { motion } from "framer-motion";
import { Experience } from "./Experience";
import { useEffect, useState } from "react";

const sliderVariantBottom = {
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

const sliderVariantTop = {
  initial: {
    x: "-50%",
  },
  animate: {
    x: "200%",
    transition: {
      duration: 15,
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

    setTimeout(() => {
      window.addEventListener("mousemove", handleMouseMove);
    }, 7800);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="hero">
      <div className="wrapper">
        <div className="text-container">
          <h2>Melvin Prince</h2>
          <h1>Full Stack Web and Blockchain Developer</h1>
          <div className="buttons">
            <button>Latest works</button>
            <button>Contact me</button>
          </div>
        </div>
      </div>
      <motion.div
        className="sliding-text-bottom"
        variants={sliderVariantBottom}
        initial="initial"
        animate="animate"
      >
        Software Engineer
      </motion.div>
      <motion.div
        className="sliding-text-top"
        variants={sliderVariantTop}
        initial="initial"
        animate="animate"
      >
        Creative Designer
      </motion.div>
      <div className="avatar-container">
        <Canvas shadows camera={{ position: [0, 2, 5], fov: 30 }}>
          <Experience cursorPos={cursorPos} />
        </Canvas>
      </div>
    </div>
  );
}
