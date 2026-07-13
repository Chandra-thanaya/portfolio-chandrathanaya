import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { useRef, ReactNode } from "react";
import * as THREE from "three";

interface MouseRigProps {
  children: ReactNode;
}

export default function MouseRig({ children }: MouseRigProps) {
  const group = useRef<Group>(null!);

  useFrame(({ mouse }) => {
    if (!group.current) return;

    const targetX = mouse.y * 0.25;
    const targetY = mouse.x * 0.35;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      targetX,
      0.06
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      targetY,
      0.06
    );
  });

  return <group ref={group}>{children}</group>;
}