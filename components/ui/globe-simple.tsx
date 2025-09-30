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
      
      {/* Connection Lines using Line2 */}
      {[
        { start: [0.5, 1.8, 0.3], end: [-0.8, 1.2, 1.1] },
        { start: [1.2, 0.5, -0.9], end: [-1.1, -0.8, 0.7] },
        { start: [0.9, -1.3, -0.6], end: [-0.3, 0.9, -1.7] },
        { start: [-0.5, -1.8, -0.3], end: [0.8, -1.2, -1.1] },
        { start: [1.7, 0.2, 0.4], end: [-0.9, 1.6, 0.2] }
      ].map((line, index) => {
        const start = new THREE.Vector3(...line.start as [number, number, number]);
        const end = new THREE.Vector3(...line.end as [number, number, number]);
        const points = [];
        for (let i = 0; i <= 30; i++) {
          const t = i / 30;
          const point = start.clone().lerp(end, t);
          // Create arc effect
          const height = Math.sin(t * Math.PI) * 0.3;
          point.normalize().multiplyScalar(2.05 + height);
          points.push(point);
        }
        
        return (
          <mesh key={index}>
            <tubeGeometry args={[new THREE.CatmullRomCurve3(points), 30, 0.005, 8, false]} />
            <meshBasicMaterial color="#EC6132" transparent opacity={0.8} />
          </mesh>
        );
      })}
      
      {/* Dense dotted pattern to simulate continents */}
      {Array.from({ length: 800 }, (_, i) => {
        // Use Fibonacci sphere for even distribution
        const phi = Math.acos(-1 + (2 * i) / 800);
        const theta = Math.sqrt(800 * Math.PI) * phi;
        
        const x = 2.01 * Math.cos(theta) * Math.sin(phi);
        const y = 2.01 * Math.sin(theta) * Math.sin(phi);
        const z = 2.01 * Math.cos(phi);
        
        // Create patterns that look like continents
        const isLand = (
          // Northern hemisphere clusters (Europe/Asia/North America)
          (y > 0.5 && Math.abs(x) < 1.5 && Math.abs(z) < 1.5) ||
          // Equatorial clusters (Africa/South America)
          (Math.abs(y) < 0.8 && x < 0 && Math.abs(z) < 1) ||
          // Southern clusters (Australia)
          (y < -0.3 && x > 0.5 && z > 0.5)
        );
        
        if (!isLand && Math.random() > 0.3) return null;
        
        return (
          <mesh key={`dot-${i}`} position={[x, y, z]}>
            <sphereGeometry args={[0.006, 6, 6]} />
            <meshBasicMaterial 
              color="#EC6132" 
              transparent 
              opacity={isLand ? (Math.random() * 0.3 + 0.5) : (Math.random() * 0.2 + 0.2)}
            />
          </mesh>
        );
      }).filter(Boolean)}
      
      {/* Large glowing connection points like Aceternity */}
      {[
        [0.5, 1.8, 0.3],   // Point 1
        [-0.8, 1.2, 1.1],  // Point 2
        [1.2, 0.5, -0.9],  // Point 3
        [-1.1, -0.8, 0.7], // Point 4
        [0.9, -1.3, -0.6]  // Point 5
      ].map((position, index) => (
        <group key={`glow-${index}`}>
          {/* Main glowing sphere */}
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.08, 32, 32]} />
            <meshBasicMaterial color="#EC6132" />
          </mesh>
          {/* Glow effect */}
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.12, 32, 32]} />
            <meshBasicMaterial color="#EC6132" transparent opacity={0.3} />
          </mesh>
          {/* Outer glow */}
          <mesh position={position as [number, number, number]}>
            <sphereGeometry args={[0.16, 32, 32]} />
            <meshBasicMaterial color="#EC6132" transparent opacity={0.1} />
          </mesh>
        </group>
      ))}
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
