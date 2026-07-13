import { Ring, Circle } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Hologram() {
  const outerRing = useRef<THREE.Mesh>(null!);
  const innerRing = useRef<THREE.Mesh>(null!);
  const glow = useRef<THREE.Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (outerRing.current) {
      outerRing.current.rotation.z = t * 0.35;
    }

    if (innerRing.current) {
      innerRing.current.rotation.z = -t * 0.6;
    }

    if (glow.current) {
      const s = 1 + Math.sin(t * 2) * 0.06;
      glow.current.scale.set(s, s, s);
      (glow.current.material as THREE.MeshBasicMaterial).opacity =
        0.12 + Math.sin(t * 2) * 0.03;
    }
  });

  return (
    <group position={[0, -1.4, 0]}>
      {/* Ground glow */}
      <Circle
        ref={glow}
        args={[1.15, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#22d3ee"
          transparent
          opacity={0.12}
        />
      </Circle>

      {/* Outer Ring */}
      <Ring
        ref={outerRing}
        args={[1.05, 1.2, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial
          color="#67e8f9"
          transparent
          opacity={0.9}
        />
      </Ring>

      {/* Inner Ring */}
      <Ring
        ref={innerRing}
        args={[0.55, 0.63, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.002, 0]}
      >
        <meshBasicMaterial
          color="#7dd3fc"
          transparent
          opacity={0.7}
        />
      </Ring>

      {/* Center Disc */}
      <Circle
        args={[0.52, 64]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -0.001, 0]}
      >
        <meshBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.08}
        />
      </Circle>
    </group>
  );
}