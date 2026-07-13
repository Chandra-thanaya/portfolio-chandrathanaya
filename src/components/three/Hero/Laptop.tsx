import { Float, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Laptop() {
  const { scene } = useGLTF("/models/laptop.glb");

  const group = useRef<THREE.Group>(null!);

  useEffect(() => {
    // Center model
    const box = new THREE.Box3().setFromObject(scene);
    const center = box.getCenter(new THREE.Vector3());
    scene.position.sub(center);

    scene.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;

      child.castShadow = true;
      child.receiveShadow = true;

      const mat = child.material as THREE.MeshStandardMaterial;

      if (!mat) return;

      mat.metalness = 0.8;
      mat.roughness = 0.25;

      // ---------- SCREEN GLOW ----------
      // Most laptop models have "screen" or "display" in their mesh name.
      // If yours doesn't, I'll show you how to find the correct mesh name.
      if (
        child.name.toLowerCase().includes("screen") ||
        child.name.toLowerCase().includes("display")
      ) {
        mat.emissive = new THREE.Color("#22d3ee");
        mat.emissiveIntensity = 4.5;
      }
    });
  }, [scene]);

  useFrame(({ clock, mouse }) => {
    if (!group.current) return;

    const t = clock.getElapsedTime();

    group.current.position.y = Math.sin(t * 1.4) * 0.12;

    group.current.rotation.y = Math.sin(t * 0.45) * 0.18;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -mouse.y * 0.12,
      0.05
    );

    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      mouse.x * 0.08,
      0.05
    );
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.2}
      floatIntensity={0.3}
    >
      <group
        ref={group}
        position={[0, -0.8, 0]}
        rotation={[0.25, Math.PI, 0]}
        scale={0.9}
      >
        <primitive object={scene} />
      </group>
    </Float>
  );
}

useGLTF.preload("/models/laptop.glb");