"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FloatingElementProps {
  className?: string
  delay?: number
  duration?: number
  children?: React.ReactNode
}

export function FloatingElement({ className, delay = 0, duration = 4, children }: FloatingElementProps) {
  return (
    <motion.div
      className={cn("absolute", className)}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export function FloatingIcon({ icon: Icon, className, ...props }: FloatingElementProps & { icon: any }) {
  return (
    <FloatingElement className={className} {...props}>
      <div className="rounded-full bg-primary/10 p-3 backdrop-blur-sm border border-primary/20">
        <Icon className="h-6 w-6 text-primary" />
      </div>
    </FloatingElement>
  )
}
