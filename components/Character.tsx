"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Character() {
    const { scrollYProgress } = useScroll();

    // Add a slight bobbing motion linked to scroll speed or just continuous 
    // For now, a simple running animation loop

    return (
        <div className="fixed bottom-20 left-10 z-50 pointer-events-none">
            <motion.div
                className="w-12 h-12 rounded-sm"
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    duration: 0.3,
                    repeat: Infinity,
                    ease: "linear"
                }}
            >
                {/* Placeholder for Runner SVG - Chrome Dino Style */}
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-[var(--foreground)]">
                    <path d="M5 21V19H3V17H5V13H7V11H9V9H11V7H13V5H15V3H19V5H21V9H19V11H17V13H19V17H17V15H15V13H13V17H15V19H13V21H9V19H11V17H9V15H7V17H9V19H7V21H5Z" fill="currentColor" />
                </svg>
            </motion.div>
            <div className="w-12 h-1 bg-[var(--foreground)]/20 mt-1 rounded-full blur-sm" />
        </div>
    );
}
