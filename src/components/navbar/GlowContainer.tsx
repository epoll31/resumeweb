"use client";

import { cn } from "@/utils/cn";
import { CSSProperties, useEffect, useRef, useState } from "react";

export default function GlowContainer({
  className,
  children,
  glowColor = "#fb3b53",
}: {
  className?: string;
  children: React.ReactNode;
  glowColor?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({
    x: "-100%",
    y: "-100%",
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setMousePosition({ x: `${x}px`, y: `${y}px` });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-full bg-neutral-300 p-px",
        className
      )}
      ref={ref}
    >
      <span
        className={`absolute z-0 h-44 w-44 -translate-x-1/2 -translate-y-1/2  blur-lg`}
        style={
          {
            left: mousePosition.x,
            top: mousePosition.y,
            backgroundImage: `radial-gradient(${glowColor} 0%, transparent 50%)`,
          } as CSSProperties
        }
      ></span>
      {children}
    </div>
  );
}