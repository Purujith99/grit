"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import * as THREE from "three";

function SceneContent() {
    const earthRef = useRef<THREE.Mesh>(null!);
    const planeRef = useRef<THREE.Group>(null!);

    // Simple stick-figure plane geometry using standard meshes
    const Plane = () => (
        <group ref={planeRef}>
            {/* Body */}
            <mesh rotation={[0, 0, -Math.PI / 2]}>
                <coneGeometry args={[0.08, 0.4, 8]} />
                <meshStandardMaterial color="#007AFF" emissive="#007AFF" emissiveIntensity={0.8} />
            </mesh>
            {/* Wings */}
            <mesh position={[0, 0, 0]} rotation={[0, 0, 0]} scale={[1, 0.1, 3]}>
                <boxGeometry args={[0.1, 0.1, 0.15]} />
                <meshStandardMaterial color="#00C6FF" transparent opacity={0.8} />
            </mesh>
        </group>
    );

    useFrame(({ clock }: { clock: THREE.Clock }) => {
        const time = clock.getElapsedTime();

        // Smooth scroll approximation
        // Since we are in a fixed canvas div, we need to read window scroll
        const scrollY = typeof window !== 'undefined' ? window.scrollY : 0;
        const maxScroll = typeof window !== 'undefined' ? (document.body.scrollHeight - window.innerHeight) || 1 : 1;
        const progress = scrollY / maxScroll;

        if (earthRef.current) {
            // Earth rotates slowly on its own + scroll speeds it up
            earthRef.current.rotation.y = time * 0.02 + progress * Math.PI;
        }

        if (planeRef.current) {
            // Plane orbits around the earth
            // Orbit radius
            const radius = 2.2;
            // Angle based on scroll to make it travel "through"
            // Adjust speed and starting phase
            const angle = -time * 0.1 - progress * Math.PI * 1.5;

            const x = Math.cos(angle) * radius;
            const z = Math.sin(angle) * radius;

            planeRef.current.position.set(x, 0, z);

            // Face direction of travel (tangent to circle)
            // At angle theta, tangent angle is theta + PI/2
            planeRef.current.rotation.y = -angle;
        }
    });

    return (
        <>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
            <directionalLight position={[-5, 5, 5]} intensity={1} color="#007AFF" />

            {/* The Globe */}
            <group>
                <mesh ref={earthRef}>
                    <sphereGeometry args={[1.8, 64, 64]} />
                    <meshPhongMaterial
                        color="#0B1C3D"
                        emissive="#007AFF"
                        emissiveIntensity={0.2}
                        specular="#ffffff"
                        shininess={20}
                    />
                    {/* Latitude/Longitude lines for "Global" feel */}
                    <lineSegments>
                        <edgesGeometry args={[new THREE.SphereGeometry(1.8, 24, 24)]} />
                        <lineBasicMaterial color="#00C6FF" opacity={0.3} transparent />
                    </lineSegments>
                </mesh>
            </group>

            <Plane />
            <Stars radius={100} depth={50} count={3000} factor={4} saturation={1} fade speed={1} />
        </>
    );
}

export default function EarthScene() {
    return (
        <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} gl={{ alpha: true }} style={{ background: 'transparent' }}>
                <SceneContent />
            </Canvas>
        </div>
    );
}
