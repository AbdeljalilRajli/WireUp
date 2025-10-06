"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="border-b border-border py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-primary to-primary/70 p-12 md:p-16 lg:p-20"
        >
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl md:text-5xl"
            >
              Ready to revolutionize your hiring?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 text-pretty text-lg text-primary-foreground/90"
            >
              Join thousands of companies already using WireUp to connect with top talent and build exceptional teams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <motion.button
                className="bg-white text-primary px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium tracking-wide transition-colors duration-200 hover:bg-white/90 flex items-center gap-2"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                Join WireUp Today
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </motion.button>
              <motion.button
                className="bg-transparent text-white border-2 border-white/30 hover:border-white/50 px-6 sm:px-8 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium tracking-wide transition-colors duration-200 hover:bg-white/5 flex items-center gap-2"
                whileHover={{
                  scale: 1.02,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.98,
                  transition: { duration: 0.1 }
                }}
              >
                Schedule a Demo
              </motion.button>
            </motion.div>
          </div>

          <div className="absolute inset-0 opacity-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                x: [0, 50, 0],
                y: [0, -30, 0],
              }}
              transition={{
                duration: 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1, 1.3, 1],
                x: [0, -50, 0],
                y: [0, 30, 0],
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-white blur-3xl"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
