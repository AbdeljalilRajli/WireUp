"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useRef } from "react"
import { GridPattern } from "@/components/ui/grid-pattern"
import { LogoCarousel } from "@/components/ui/logo-carousel"
import dynamic from "next/dynamic"

const World = dynamic(() => import("./ui/globe-aceternity").then((m) => m.World), {
  ssr: false,
})

export function HeroSection() {
  const ref = useRef(null)
  
  // Globe configuration with orange colors
  const globeConfig = {
    pointSize: 4,
    globeColor: "#262626",
    showAtmosphere: true,
    atmosphereColor: "#EC6132",
    atmosphereAltitude: 0.1,
    emissive: "#EC6132",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(236,97,50,0.7)",
    ambientLight: "#EC6132",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  }

  const colors = ["#EC6132", "#f97316", "#ea580c"]
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ]
  
  return (
    <section className="relative min-h-screen bg-background overflow-hidden flex items-center section-padding pt-32 sm:pt-36 md:pt-40 lg:pt-44 xl:pt-48" ref={ref}>
      {/* Background Grid Pattern */}
      <GridPattern 
        className="absolute inset-0 opacity-30" 
        squares={[
          [4, 4], [5, 1], [8, 2], [5, 3], [5, 5], [10, 10], [12, 15], [15, 10], [10, 15], [15, 15], [20, 20]
        ]} 
      />
      
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      <div className="container relative">
        <div className="grid items-center grid-responsive lg:grid-cols-2">
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
            >
              <Zap className="mr-2 h-4 w-4" />
              AI-Powered Recruitment Platform
            </motion.div>

            {/* Main Heading */}
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-balance heading-xl font-bold leading-tight tracking-tight"
            >
              Wire Up Your{" "}
              <span className="relative">
                <span className="text-primary">Perfect</span>
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 bg-primary/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1, delay: 1 }}
                />
              </span>{" "}
              Team
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 max-w-xl text-pretty text-xl text-muted-foreground leading-relaxed"
            >
              Connect exceptional IT talent with innovative companies. Our AI-driven platform streamlines recruitment with intelligent matching, automated workflows, and data-driven insights.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                Start Hiring Now
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
                Watch Demo
              </Button>
            </motion.div>

            {/* Minimalist Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex flex-wrap items-center gap-8 md:gap-12"
            >
              {[
                { number: "10K+", label: "Developers" },
                { number: "500+", label: "Companies" },
                { number: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: 0.7 + index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="group text-center"
                >
                  <div className="relative">
                    {/* Number */}
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-1 transition-colors group-hover:text-primary/80">
                      {stat.number}
                    </div>
                    
                    {/* Label */}
                    <div className="text-sm text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                    
                    {/* Subtle underline on hover */}
                    <div className="absolute -bottom-1 left-1/2 h-0.5 w-0 bg-primary/30 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Globe Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-full max-w-[600px] aspect-square">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>
          </motion.div>
        </div>

        {/* Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <LogoCarousel />
        </motion.div>
      </div>
    </section>
  )
}
