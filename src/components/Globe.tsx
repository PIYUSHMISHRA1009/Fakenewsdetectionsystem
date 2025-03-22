import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export function Globe() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <meshPhongMaterial
          color="#1d4ed8"
          opacity={0.8}
          transparent
          wireframe
        />
      </Sphere>
    </group>
  );
}