import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

export default function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(3000);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }

    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#7dd3fc"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
      />
    </Points>
  );
}