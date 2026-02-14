"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ScrollWrapper({ children, className }: ScrollWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Resize observer to get the total width of the horizontal content
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        // Add a small buffer to ensure we capture full width
        setContainerWidth(containerRef.current.scrollWidth);
      }
    };

    // Initial calculation
    updateWidth();

    // Recalculate after a short delay to ensure fonts/layout are settled
    const timer = setTimeout(updateWidth, 100);

    window.addEventListener("resize", updateWidth);
    return () => {
      window.removeEventListener("resize", updateWidth);
      clearTimeout(timer);
    };
  }, [children]);

  const { scrollYProgress } = useScroll();

  // Smooth out the scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transform vertical scroll (0-1) to horizontal translation
  // We move the container to the left, so it's a negative value.
  // The max translation is (total width - viewport width).
  const x = useTransform(smoothProgress, [0, 1], [0, -(containerWidth - (typeof window !== 'undefined' ? window.innerWidth : 1000))]);

  return (
    <>
      {/* Spacer to create the scrollable height */}
      <div
        style={{ height: containerWidth ? `${containerWidth}px` : "500vh" }}
        className="pointer-events-none opacity-0"
      />

      {/* Fixed container that moves horizontally */}
      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden">
        <motion.div
          ref={containerRef}
          style={{ x }}
          className={cn("flex h-full w-max", className)}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
}
