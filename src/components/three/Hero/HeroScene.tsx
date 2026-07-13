import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Laptop from "./Laptop";
import Lights from "./Lights";
import MouseRig from "./MouseRig";
import CameraRig from "./CameraRig";
import Particles from "./Particles";
import Hologram from "./Hologram";

export default function HeroScene() {
  return (
    <Canvas
      shadows
      camera={{
        position: [0, 0.65, 6.6],
        fov: 37,
      }}
      gl={{
        alpha: true,
        antialias: true,
      }}
      style={{
        background: "transparent",
      }}
    >
      <Suspense fallback={null}>
        <Lights />

        <Particles />

        <CameraRig>
          <MouseRig>
            <Hologram />

            <Laptop />
          </MouseRig>
        </CameraRig>
      </Suspense>

      <OrbitControls
        makeDefault
        enableRotate={false}
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.08}
      />
    </Canvas>
  );
}