"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { usePathPosition } from "./FlightPath";

export function Airplane() {
    const { x, y, angle, opacity, scale } = usePathPosition();

    return (
        <motion.div
            className="fixed z-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            style={{
                left: x,
                top: y,
                opacity:0.2,
                scale,
                rotate: angle,
            }}
            aria-hidden
        >
            <div
                className="relative w-[clamp(64px,7vw,100px)] drop-shadow-2xl"
            >
                <Image
                    src="/airplane.png"
                    alt=""
                    width={512}
                    height={512}
                    className="h-auto w-full object-contain"
                    unoptimized
                    priority
                    style={{
                        imageRendering: "auto",
                        // Filter to turn White into Light Blue (#0EA5E9)
                        filter: "invert(48%) sepia(79%) saturate(2476%) hue-rotate(170deg) brightness(118%) contrast(119%)"
                    }}
                />
            </div>
        </motion.div>
    );
}
