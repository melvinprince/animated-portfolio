import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = ({
  cursorPos,
  currentAnimation,
  setCurrentAnimation,
}) => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1.2}>
        <ContactShadows
          opacity={0.42}
          scale={8}
          blur={0.7}
          far={10}
          resolution={256}
          color="#ffffff"
        />

        <Avatar
          cursorPos={cursorPos}
          currentAnimation={currentAnimation}
          setCurrentAnimation={setCurrentAnimation}
        />
      </group>
      <ambientLight intensity={3} />
    </>
  );
};
