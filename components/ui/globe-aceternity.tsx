"use client";

import createGlobe from "cobe";
import { useEffect, useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

export function Globe({
  className,
  config = {},
}: {
  className?: string;
  config?: any;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [r, setR] = useState(0);
  const lastUpdateTime = useRef(0);

  // Throttled rotation update for better performance
  const updateRotation = useCallback((newR: number) => {
    const now = Date.now();
    if (now - lastUpdateTime.current > 16) { // ~60fps throttling
      setR(newR);
      lastUpdateTime.current = now;
    }
  }, []);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
    window.addEventListener('resize', onResize);
    onResize();

    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.93, 0.38, 0.2],
      glowColor: [0.93, 0.38, 0.2],
      markers: [
        { location: [37.7749, -122.4194], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.07 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6762, 139.6503], size: 0.05 },
        { location: [-33.8688, 151.2093], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.04 },
      ],
      onRender: (state) => {
        if (!pointerInteracting.current) {
          phi += 0.005;
        }
        state.phi = phi + r;
        state.width = width * 2;
        state.height = width * 2;
      },
      ...config,
    });

    setTimeout(() => canvasRef.current && (canvasRef.current.style.opacity = '1'));
    
    return () => {
      globe.destroy();
      window.removeEventListener('resize', onResize);
    };
  }, [config, r, updateRotation]);

  return (
    <div className={cn("relative w-full h-full", className)}>
      <canvas
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
          canvasRef.current && (canvasRef.current.style.cursor = 'grabbing');
        }}
        onPointerUp={() => {
          pointerInteracting.current = null;
          canvasRef.current && (canvasRef.current.style.cursor = 'grab');
        }}
        onPointerOut={() => {
          pointerInteracting.current = null;
          canvasRef.current && (canvasRef.current.style.cursor = 'grab');
        }}
        onMouseMove={(e) => {
          if (pointerInteracting.current !== null) {
            const delta = e.clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            updateRotation(delta / 200);
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            updateRotation(delta / 100);
          }
        }}
        className="w-full h-full opacity-0 transition-opacity duration-500 cursor-grab"
        style={{ 
          width: '100%', 
          height: '100%', 
          maxWidth: "100%", 
          aspectRatio: 1,
          contain: 'layout style size',
          display: 'block'
        }}
      />
      
      {/* Traveling lights effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
            style={{
              animation: `orbit-${i % 4} ${4 + i * 0.5}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>
      
      <style jsx>{`
        @keyframes orbit-0 {
          0% { transform: rotate(0deg) translateX(250px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(250px) rotate(-360deg); }
        }
        @keyframes orbit-1 {
          0% { transform: rotate(90deg) translateX(280px) rotate(-90deg); }
          100% { transform: rotate(450deg) translateX(280px) rotate(-450deg); }
        }
        @keyframes orbit-2 {
          0% { transform: rotate(180deg) translateX(260px) rotate(-180deg); }
          100% { transform: rotate(540deg) translateX(260px) rotate(-540deg); }
        }
        @keyframes orbit-3 {
          0% { transform: rotate(270deg) translateX(290px) rotate(-270deg); }
          100% { transform: rotate(630deg) translateX(290px) rotate(-630deg); }
        }
      `}</style>
    </div>
  );
}

export function World(props: any) {
  return (
    <div className="w-full h-full flex items-center justify-center p-4">
      <Globe className="w-full h-full max-w-full max-h-full" />
    </div>
  );
}
