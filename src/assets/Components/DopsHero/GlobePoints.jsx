import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function GlobePoints({ explode }) {
  const pointsRef = useRef();

  const { positions, directions } = useMemo(() => {
    const radius = 0.65;
    const count = 4000;

    const positions = new Float32Array(count * 3);
    const directions = [];

    for (let i = 0; i < count; i++) {
      const u = Math.random();
      const v = Math.random();

      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.cos(phi);
      const z = radius * Math.sin(phi) * Math.sin(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      directions.push(
        new THREE.Vector3(x, y, z)
          .normalize()
          .multiplyScalar(1 + Math.random() * 1.5)
      );
    }

    return {
      positions,
      directions,
    };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    const geometry = pointsRef.current.geometry;
    const array = geometry.attributes.position.array;

    // Rotation
    pointsRef.current.rotation.y += explode ? 0.001 : 0.00035;

    // Hover -> explode
    // Leave -> instant restore
    const progress = explode ? 1 : 0;

    for (let i = 0; i < directions.length; i++) {
      const dir = directions[i];

      const ox = positions[i * 3];
      const oy = positions[i * 3 + 1];
      const oz = positions[i * 3 + 2];

      array[i * 3] = ox + dir.x * progress * 0.9;
      array[i * 3 + 1] = oy + dir.y * progress * 0.9;
      array[i * 3 + 2] = oz + dir.z * progress * 0.9;
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#a855f7"
        size={explode ? 0.014 : 0.012}
        transparent
        opacity={1}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}