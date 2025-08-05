import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCube = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.7}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>
    </Float>
  );
};

const FloatingTorus = ({ position, color, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.z += 0.008;
    }
  });

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={3}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <torusGeometry args={[1, 0.4, 16, 100]} />
        <meshStandardMaterial 
          color={color} 
          transparent 
          opacity={0.6}
          roughness={0.1}
          metalness={1}
        />
      </mesh>
    </Float>
  );
};

const Hero3D = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} color="#6366f1" intensity={0.5} />
      <pointLight position={[10, 10, 10]} color="#8b5cf6" intensity={0.5} />

      {/* 3D Elements */}
      <FloatingCube position={[-4, 2, -2]} color="#6366f1" scale={0.8} />
      <FloatingSphere position={[4, -1, -3]} color="#8b5cf6" scale={1.2} />
      <FloatingTorus position={[2, 3, -4]} color="#06b6d4" scale={0.6} />
      <FloatingCube position={[-3, -2, -5]} color="#ec4899" scale={0.5} />
      <FloatingSphere position={[5, 1, -2]} color="#10b981" scale={0.7} />
      <FloatingTorus position={[-2, 4, -3]} color="#f59e0b" scale={0.8} />
    </>
  );
};

export default Hero3D;