import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingShapeProps {
  position: [number, number, number];
  color: string;
  Geometry: any;
  args?: any[];
  speed?: number;
  scale?: number;
}

const FloatingShape: React.FC<FloatingShapeProps> = ({ position, color, Geometry, args = [], speed = 1, scale = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.sin(t * 0.2 * speed) * 0.3;
      meshRef.current.rotation.y += 0.005 * speed;
      meshRef.current.rotation.z = Math.cos(t * 0.1 * speed) * 0.15;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={0.4} floatIntensity={0.6} floatingRange={[-0.5, 0.5]}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <Geometry args={args} />
        <meshStandardMaterial 
          color={color} 
          wireframe
          transparent
          opacity={0.3}
          roughness={0.1}
          metalness={0.5}
        />
      </mesh>
    </Float>
  );
};

export const ThreeBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none select-none">
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
        <fog attach="fog" args={['#0f172a', 5, 25]} />
        
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <pointLight position={[-10, -10, -5]} intensity={0.5} color="#38bdf8" />

        <group>
          {/* Main Geometric Elements */}
          <FloatingShape 
            position={[4, 1, -2]} 
            color="#0ea5e9" 
            Geometry={(props: any) => <icosahedronGeometry {...props} />}
            args={[1.5, 0]} 
            speed={0.8}
          />
          
          <FloatingShape 
            position={[-4, -2, -3]} 
            color="#6366f1" 
            Geometry={(props: any) => <octahedronGeometry {...props} />}
            args={[1.5, 0]} 
            speed={0.6}
          />

          <FloatingShape 
            position={[0, 4, -5]} 
            color="#10b981" 
            Geometry={(props: any) => <dodecahedronGeometry {...props} />}
            args={[1, 0]} 
            speed={0.5}
          />

          {/* Background Complex Knot */}
          <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2}>
            <mesh position={[-3, 3, -8]} rotation={[0, 0, 0]} scale={0.6}>
               <torusKnotGeometry args={[3, 0.8, 128, 16]} />
               <meshStandardMaterial 
                 color="#cbd5e1" 
                 wireframe 
                 transparent 
                 opacity={0.05} 
               />
            </mesh>
          </Float>

          {/* Particle Effects */}
          <Sparkles 
            count={50} 
            scale={12} 
            size={4} 
            speed={0.3} 
            opacity={0.4}
            color="#bae6fd"
          />
          <Sparkles 
            count={30} 
            scale={8} 
            size={6} 
            speed={0.2} 
            opacity={0.2}
            color="#818cf8"
          />
        </group>

        <Stars radius={50} depth={50} count={2000} factor={4} saturation={0} fade speed={0.8} />
      </Canvas>
    </div>
  );
};