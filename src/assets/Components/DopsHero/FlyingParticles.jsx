import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function FlyingParticles({ explode }) {
  const pointsRef = useRef();

  const COUNT = 400;
  const RADIUS = 0.65;

  const { positions, velocities } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = [];

    for (let i = 0; i < COUNT; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.cos(phi);
      const z = RADIUS * Math.sin(phi) * Math.sin(theta);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      velocities.push(
        new THREE.Vector3(x, y, z)
          .normalize()
          .multiplyScalar(0.002 + Math.random() * 0.002)
      );
    }

    return { positions, velocities };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;

    const geometry = pointsRef.current.geometry;
    const array = geometry.attributes.position.array;

    const speedMultiplier = explode ? 3 : 1;

    for (let i = 0; i < COUNT; i++) {
      array[i * 3] += velocities[i].x * speedMultiplier;
      array[i * 3 + 1] += velocities[i].y * speedMultiplier;
      array[i * 3 + 2] += velocities[i].z * speedMultiplier;

      const x = array[i * 3];
      const y = array[i * 3 + 1];
      const z = array[i * 3 + 2];

      const dist = Math.sqrt(x * x + y * y + z * z);

      // Respawn
      if (dist > (explode ? 3.2 : 2.2)) {
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(2 * Math.random() - 1);

        const nx = RADIUS * Math.sin(phi) * Math.cos(theta);
        const ny = RADIUS * Math.cos(phi);
        const nz = RADIUS * Math.sin(phi) * Math.sin(theta);

        array[i * 3] = nx;
        array[i * 3 + 1] = ny;
        array[i * 3 + 2] = nz;

        velocities[i]
          .set(nx, ny, nz)
          .normalize()
          .multiplyScalar(
            explode
              ? 0.006 + Math.random() * 0.006
              : 0.002 + Math.random() * 0.002
          );
      }
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        color="#d946ef"
        size={explode ? 0.022 : 0.018}
        transparent
        opacity={explode ? 1 : 0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}