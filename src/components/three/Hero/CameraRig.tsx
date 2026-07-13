import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function CameraRig({
  children,
}: {
  children: React.ReactNode;
}) {
  const target = useRef(new THREE.Vector3());

  useFrame(({ camera, mouse }) => {
    // Mouse controls camera position
    target.current.set(
      mouse.x * 0.45,
      mouse.y * 0.25 + 0.4,
      6
    );

    camera.position.lerp(target.current, 0.04);

    // Always look toward laptop
    camera.lookAt(0, 0.2, 0);
  });

  return <>{children}</>;
}