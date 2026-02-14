"use client";

import { useEffect, useState } from "react";

const width = 1000;
const height = 8000;
const amplitude = 350; // Wiggle width
const frequency = 0.002; // Wiggle frequency

export function usePathPosition() {
    const [pos, setPos] = useState({ x: "50vw", y: "50vh", angle: 0, opacity: 0.5, scale: 1 });

    useEffect(() => {
        const updatePlane = () => {
            const scrollY = window.scrollY;
            const screenCenterY = scrollY + window.innerHeight / 2;
            const docHeight = document.body.scrollHeight;
            const ratio = height / docHeight;
            const currentY = screenCenterY * ratio;

            const rawX = width / 2 + amplitude * Math.sin(currentY * frequency);
            const x = `${rawX / 10}vw`; // Convert 0-1000 scale to 0-100vw

            const dx_dy = amplitude * frequency * Math.cos(currentY * frequency);
            const rot = Math.atan2(dx_dy, 1) * (180 / Math.PI);

            setPos({
                x,
                y: "50vh",
                angle: rot + 180,
                opacity: 0.5,
                scale: 1
            });
        };

        window.addEventListener("scroll", updatePlane);
        window.addEventListener("resize", updatePlane);
        updatePlane();
        return () => {
            window.removeEventListener("scroll", updatePlane);
            window.removeEventListener("resize", updatePlane);
        };
    }, []);

    return pos;
}

export default function FlightPath() {
    // Generate Path: Vertical Sine Wave
    let d = `M ${width / 2},0 `;
    for (let y = 0; y <= height; y += 100) {
        const x = width / 2 + amplitude * Math.sin(y * frequency);
        d += `L ${x},${y} `;
    }

    return (
        <div className="absolute top-0 left-0 w-full h-[800vh] z-0 pointer-events-none overflow-hidden">
            {/* The Static Path Layer */}
            <div className="w-full h-full opacity-100">
                <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full" preserveAspectRatio="none">
                    <path
                        d={d}
                        fill="none"
                        stroke="var(--accent)"
                        strokeWidth="6"
                        strokeDasharray="40 15"
                        style={{ filter: "drop-shadow(0 0 8px rgba(0, 122, 255, 0.4))", opacity: 0.1 }}
                    />
                </svg>
            </div>
        </div>
    );
}
