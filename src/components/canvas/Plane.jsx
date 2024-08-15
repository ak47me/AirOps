import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Plane = ({ isMobile }) => {
  const plane = useGLTF("/plane/scene.gltf");
  console.log(plane);

  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor='black' />
      <spotLight
        position={[-20, 40, 10]}
        angle={0.2}
        penumbra={1}
        intensity={3}
        castShadow
        shadow-mapSize={1000}
      />
      <primitive
        object={plane.scene}
        scale={isMobile ? 0.04 : 0.045}
        position={isMobile ? [-1, -3, 0.5] : [-2, -0.5, 0]}
        rotation={[-0.15, -0.5, -0.2]}
      />
    </mesh>
  );
};

const PlaneCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{ position: [20, 3, 7], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Plane isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default PlaneCanvas;