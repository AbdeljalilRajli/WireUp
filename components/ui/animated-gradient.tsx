"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedGradientProps {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function AnimatedGradient({ children, className, containerClassName }: AnimatedGradientProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <motion.div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-transparent",
          className
        )}
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {children}
    </div>
  )
}
