"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxBackground() {
    const { scrollYProgress } = useScroll();

    // Create multiple parallax layers
    const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
    const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const x3 = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
            {/* Layer 1: Distant Stars / Grid */}
            <motion.div style={{ x: x1 }} className="absolute inset-0 w-[200vw] h-full opacity-5 bg-[url('/grid-pattern.svg')] bg-repeat" />

            {/* Layer 2: Mid-ground Shapes */}
            <motion.div style={{ x: x2 }} className="absolute inset-0 w-[300vw] h-full">
                <div className="absolute top-20 left-[20vw] w-64 h-64 bg-[var(--accent)]/5 rounded-full blur-3xl" />
                <div className="absolute bottom-40 left-[60vw] w-96 h-96 bg-[var(--accent-secondary)]/5 rounded-full blur-3xl" />
                <div className="absolute top-10 left-[120vw] w-48 h-48 bg-[var(--foreground)]/5 rounded-full blur-2xl" />
            </motion.div>

            {/* Layer 3: Foreground Hints */}
            <motion.div style={{ x: x3 }} className="absolute inset-0 w-[400vw] h-full">
                {/* Subtle lines or floating elements */}
            </motion.div>
        </div>
    );
}
