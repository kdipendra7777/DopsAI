import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";

import GlobePoints from "./GlobePoints";
import FlyingParticles from "./FlyingParticles";

export default function ParticleGlobe() {
  const [explode, setExplode] = useState(false);

  return (
    <div
      className="w-full h-full"
      onMouseEnter={() => setExplode(true)}
      onMouseLeave={() => setExplode(false)}
    >
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={1.5} />

        {/* Globe */}
        <GlobePoints explode={explode} />

        {/* Flying Particles */}
        <FlyingParticles explode={explode} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={!explode}
          autoRotateSpeed={0.2}
        />
      </Canvas>
    </div>
  );
}