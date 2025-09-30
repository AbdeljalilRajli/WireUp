"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";
import * as THREE from "three";

type Position = {
  order: number;
  startLat: number;
  startLng: number;
  endLat: number;
  endLng: number;
  arcAlt: number;
  color: string;
};

export type GlobeConfig = {
  pointSize?: number;
  globeColor?: string;
  showAtmosphere?: boolean;
  atmosphereColor?: string;
  atmosphereAltitude?: number;
  emissive?: string;
  emissiveIntensity?: number;
  shininess?: number;
  polygonColor?: string;
  ambientLight?: string;
  directionalLeftLight?: string;
  directionalTopLight?: string;
  pointLight?: string;
  arcTime?: number;
  arcLength?: number;
  rings?: number;
  maxRings?: number;
  initialPosition?: {
    lat: number;
    lng: number;
  };
  autoRotate?: boolean;
  autoRotateSpeed?: number;
};

interface WorldProps {
  globeConfig: GlobeConfig;
  data: Position[];
}

// Simple rotating globe component
function RotatingGlobe() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <group>
      {/* Main Globe */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshStandardMaterial
          color="#262626"
          emissive="#EC6132"
          emissiveIntensity={0.1}
          roughness={0.8}
          metalness={0.2}
        />
      </Sphere>
      
      {/* Atmosphere */}
      <Sphere args={[2.1, 32, 32]}>
        <meshBasicMaterial
          color="#EC6132"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
      
      {/* Glowing Points */}
      {[
        [0.5, 1.8, 0.3],
        [-0.8, 1.2, 1.1],
        [1.2, 0.5, -0.9],
        [-1.1, -0.8, 0.7],
        [0.9, -1.3, -0.6],
        [-0.3, 0.9, -1.7],
        [1.5, -0.2, 0.8],
        [-1.4, 0.6, -0.5]
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <sphereGeometry args={[0.03, 16, 16]} />
          <meshBasicMaterial color="#EC6132" />
        </mesh>
      ))}
      
      {/* Connection Lines */}
      {[
        { start: [0.5, 1.8, 0.3], end: [-0.8, 1.2, 1.1] },
        { start: [1.2, 0.5, -0.9], end: [-1.1, -0.8, 0.7] },
        { start: [0.9, -1.3, -0.6], end: [-0.3, 0.9, -1.7] }
      ].map((line, index) => {
        const start = new THREE.Vector3(...line.start as [number, number, number]);
        const end = new THREE.Vector3(...line.end as [number, number, number]);
        const points = [];
        for (let i = 0; i <= 50; i++) {
          const t = i / 50;
          const point = start.clone().lerp(end, t);
          // Create arc effect
          const height = Math.sin(t * Math.PI) * 0.5;
          point.normalize().multiplyScalar(2 + height);
          points.push(point);
        }
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        return (
          <line key={index} geometry={geometry}>
            <lineBasicMaterial color="#EC6132" opacity={0.6} transparent />
          </line>
        );
      })}
    </group>
  );
}

export function World(props: WorldProps) {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#EC6132" />
      
      <RotatingGlobe />
      
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI - Math.PI / 3}
      />
    </Canvas>
  );
}

export { World as Globe };
