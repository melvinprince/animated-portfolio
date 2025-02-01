import { ContactShadows, OrbitControls } from "@react-three/drei";
import { Avatar } from "./Avatar";

export const Experience = ({ cursorPos }) => {
  return (
    <>
      <OrbitControls />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.42}
          scale={8}
          blur={0.7}
          far={10}
          resolution={256}
          color="#ffffff"
        />

        <Avatar cursorPos={cursorPos} />
      </group>
      <ambientLight intensity={3} />
    </>
  );
};
