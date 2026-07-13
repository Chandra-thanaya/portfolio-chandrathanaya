import React from "react";

export default function Lights() {
  return (
    <>
      {/* Ambient Light */}
      <ambientLight intensity={0.6} />

      {/* Main White Key Light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={2}
        castShadow
      />

      {/* Top Fill Light */}
      <pointLight
        position={[0, 3, 2]}
        intensity={2}
        color="#ffffff"
      />

      {/* Cyan Rim Light */}
      <pointLight
        position={[3, 2, 2]}
        color="#22d3ee"
        intensity={25}
      />

      {/* Pink Rim Light */}
      <pointLight
            position={[3,2,2]}
            color="#22d3ee"
            intensity={10}
        />

        <pointLight
            position={[-3,-2,-2]}
            color="#ec4899"
            intensity={6}
        />
    </>
  );
}