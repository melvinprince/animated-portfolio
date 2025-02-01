import { useRef } from "react";
import "./styles/parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ type }) {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <section>
      <div
        className="parallax"
        ref={ref}
        style={{
          background:
            type === "services"
              ? "linear-gradient(180deg, #111132, #0c0c1d)"
              : "linear-gradient(180deg, #111132, #505064)",
        }}
      >
        <motion.h1 style={{ y: yText }}>
          {type == "services" ? "What I do?" : "What I did?"}
        </motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div style={{ y: yBg }} className="planets"></motion.div>
        <motion.div style={{ x: yBg }} className="stars"></motion.div>
      </div>
    </section>
  );
}
