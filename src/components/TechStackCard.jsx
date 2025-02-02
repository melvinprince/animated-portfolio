import { useState } from "react";
import "./styles/techStackCard.scss";

import reactSvg from "/src/icons/react.svg";
import ReactSVG from "./icons/ReactSVG";

export default function TechStackCard({ data }) {
  const [tiltStyle, setTiltStyle] = useState({});
  const [lightStyle, setLightStyle] = useState({ opacity: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Normalize tilt effect
    const xTilt = (x / rect.width - 0.5) * 10;
    const yTilt = (y / rect.height - 0.5) * 10;

    setTiltStyle({
      transform: `perspective(1000px) rotateX(${yTilt}deg) rotateY(${xTilt}deg)`,
      transition: "transform 0.1s ease-out",
    });

    setLightStyle({
      left: `${x}px`,
      top: `${y}px`,
      opacity: 1,
      transition: "opacity 0.2s ease-out, transform 0.05s ease-out",
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({
      transform: "perspective(1000px) rotateX(0deg) rotateY(0deg)",
      transition: "transform 0.5s ease-out",
    });

    setLightStyle({
      opacity: 0,
      transition: "opacity 0.3s ease-out",
    });
  };

  return (
    <li
      className="techStackCard"
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Moving Light Effect */}
      <div className="card-light" style={lightStyle} />
      {/* SVG Logo */}
      <ReactSVG />
      <h2>{data.heading}</h2>
      <p>{data.stacks.join(", ")}</p>
    </li>
  );
}
