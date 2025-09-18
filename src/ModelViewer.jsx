
import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float } from "@react-three/drei";


function useWindowSize() {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleResize = () => setSize([window.innerWidth, window.innerHeight]);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
}

function Model() {
  const { scene } = useGLTF("/weird_bubble_copy.glb");
  const meshRefs = useRef([]);
  const groupRef = useRef();
  const lightRef = useRef();

  const [opacity, setOpacity] = useState(0);

  const [width] = useWindowSize();


  let baseScale = 0.7; 
  if (width < 640) baseScale = 0.2;   
  else if (width < 1024) baseScale = 0.4;

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = child.material.clone();
        child.material.color.set("#b0b0b0");
        child.material.emissive.set("#0d1b4c");
        child.material.emissiveIntensity = 0.4;
        child.material.metalness = 0.7;
        child.material.roughness = 0.3;
        child.material.transparent = true;
        child.material.opacity = 0;
        meshRefs.current.push(child);
      }
    });
  }, [scene]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    
    if (opacity < 1) {
      const newOpacity = Math.min(opacity + 0.02, 1);
      setOpacity(newOpacity);
      meshRefs.current.forEach((mesh) => {
        if (mesh.material) mesh.material.opacity = newOpacity;
      });
    }

    
    const pulse = 0.1 + Math.sin(t * 2) * 0.2;
    meshRefs.current.forEach((mesh) => {
      if (mesh.material) mesh.material.emissiveIntensity = pulse;
    });

   
    if (groupRef.current) {
      const scale = baseScale + Math.sin(t * 1.5) * 0.05;
      groupRef.current.scale.set(scale, scale, scale);
    }

   
    if (lightRef.current) {
      lightRef.current.intensity = 0.8 + Math.sin(t * 2) * 0.3;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} position={[0, -0.5, 0]} />
      <pointLight ref={lightRef} position={[0, 2, 2]} color="#4a6cff" intensity={0.8} />
    </group>
  );
}

const ModelViewer = () => {
  return (
    
    <div style={{ width: "1260px", height: "60vh" }}>
  <Canvas camera={{ position: [0, 3, 7], fov: 50, near: 0.01, far: 2000 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} />
        <pointLight position={[-5, 2, 5]} intensity={0.8} color="#3b4cca" />
        <pointLight position={[5, -3, -5]} intensity={0.5} color="#1a237e" />
        <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={1} />

        <Float speed={2} rotationIntensity={2} floatIntensity={2}>
          <Model />
        </Float>

        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
