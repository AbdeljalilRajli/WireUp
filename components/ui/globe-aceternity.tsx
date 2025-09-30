"use client";

import createGlobe from "cobe";
import { useEffect, useRef } from "react";
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
  const r = useRef(0);

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
        state.phi = phi + r.current;
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
  }, [config]);

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
            r.current = delta / 200;
          }
        }}
        onTouchMove={(e) => {
          if (pointerInteracting.current !== null && e.touches[0]) {
            const delta = e.touches[0].clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            r.current = delta / 100;
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
      
      {/* Satellite orbital paths */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Orbital ring 1 - Equatorial */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/30"
          style={{
            width: '100%',
            height: '100%',
            animation: 'orbit-ring 20s linear infinite',
          }}
        >
          <div 
            className="absolute w-2 h-2 bg-primary rounded-full shadow-lg shadow-primary/50"
            style={{
              top: '50%',
              left: '0%',
              transform: 'translate(-50%, -50%)',
              animation: 'satellite-move 20s linear infinite',
            }}
          />
        </div>
        
        {/* Orbital ring 2 - Tilted */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/20"
          style={{
            width: '100%',
            height: '100%',
            transform: 'rotateX(30deg) rotateY(45deg)',
            animation: 'orbit-ring 25s linear infinite reverse',
          }}
        >
          <div 
            className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/40"
            style={{
              top: '50%',
              left: '0%',
              transform: 'translate(-50%, -50%)',
              animation: 'satellite-move 25s linear infinite',
            }}
          />
        </div>
        
        {/* Orbital ring 3 - Polar */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/25"
          style={{
            width: '100%',
            height: '100%',
            transform: 'rotateX(90deg)',
            animation: 'orbit-ring 30s linear infinite',
          }}
        >
          <div 
            className="absolute w-1.5 h-1.5 bg-primary rounded-full shadow-md shadow-primary/40"
            style={{
              top: '50%',
              left: '0%',
              transform: 'translate(-50%, -50%)',
              animation: 'satellite-move 30s linear infinite',
            }}
          />
        </div>
        
        {/* Additional orbital paths */}
        <div 
          className="absolute inset-0 rounded-full border border-primary/15"
          style={{
            width: '110%',
            height: '110%',
            top: '-5%',
            left: '-5%',
            transform: 'rotateX(60deg) rotateZ(30deg)',
            animation: 'orbit-ring 35s linear infinite reverse',
          }}
        >
          <div 
            className="absolute w-1 h-1 bg-primary rounded-full shadow-sm shadow-primary/30"
            style={{
              top: '50%',
              left: '0%',
              transform: 'translate(-50%, -50%)',
              animation: 'satellite-move 35s linear infinite',
            }}
          />
        </div>
      </div>
      
      <style jsx>{`
        @keyframes orbit-ring {
          0% { transform: rotateZ(0deg); }
          100% { transform: rotateZ(360deg); }
        }
        
        @keyframes satellite-move {
          0% { 
            left: 0%; 
            top: 50%; 
            opacity: 1;
          }
          25% { 
            left: 50%; 
            top: 0%; 
            opacity: 1;
          }
          50% { 
            left: 100%; 
            top: 50%; 
            opacity: 1;
          }
          75% { 
            left: 50%; 
            top: 100%; 
            opacity: 1;
          }
          100% { 
            left: 0%; 
            top: 50%; 
            opacity: 1;
          }
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
