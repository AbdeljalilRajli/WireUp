"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Zap, Github, Twitter, Linkedin, Instagram, Globe } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { useTheme } from "next-themes"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const navbarHeight = 100 // Account for floating navbar height
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <footer className="relative bg-background border-t border-border/50" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      {/* Enhanced animated gradient orb */}
      <motion.div 
        className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-br from-primary via-primary/60 to-primary/30 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="container relative section-padding">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-start"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Left Side - CTA Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Start work today
            </motion.h2>
            
            {/* Enhanced Email Signup */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative flex-1">
                <Input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="h-14 px-6 text-lg bg-background/80 border-2 border-border/50 focus:border-primary focus:shadow-lg focus:shadow-primary/20 transition-all duration-300 focus:scale-[1.02] placeholder:text-muted-foreground/60"
                  style={{
                    boxShadow: '0 0 0 1px rgba(236, 97, 50, 0.1), 0 0 20px rgba(236, 97, 50, 0.1)'
                  }}
                />
                {/* Glowing border effect */}
                <div className="absolute inset-0 rounded-md border-2 border-primary/30 opacity-0 transition-opacity duration-300 pointer-events-none focus-within:opacity-100" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="h-14 bg-primary hover:bg-primary/90 text-white px-10 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                  Get Started
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Links and Social */}
          <motion.div 
            className="grid grid-cols-2 gap-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h4 className="text-foreground font-semibold mb-4">Navigation</h4>
              <div className="space-y-4">
                {[
                  { name: "Features", id: "features" },
                  { name: "Process", id: "process" },
                  { name: "Team", id: "team" }
                ].map((link, index) => (
                  <motion.button 
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-left text-foreground hover:text-primary transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h4 className="text-foreground font-semibold mb-4">More</h4>
              <div className="space-y-4">
                {[
                  { name: "Testimonials", id: "testimonials" },
                  { name: "Contact Us", id: "contact" }
                ].map((link, index) => (
                  <motion.button 
                    key={link.name}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-left text-foreground hover:text-primary transition-all duration-300 cursor-pointer"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ x: 5, transition: { duration: 0.2 } }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border/50"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
            {/* Brand and Description */}
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.div 
                className="flex items-center gap-3 mb-4"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Image
                    src={mounted && theme === 'light' ? "/logo-dark.png" : "/logo-white.png"}
                    alt="WireUp Logo"
                    width={120}
                    height={40}
                    className="h-10 w-auto"
                  />
                </motion.div>
              </motion.div>
              <motion.p 
                className="text-muted-foreground max-w-md leading-relaxed"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.5, delay: 1.1 }}
              >
                High level experience in IT recruitment and talent matching, producing quality connections.
              </motion.p>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <motion.p 
                className="text-foreground font-medium mb-4"
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ duration: 0.4, delay: 1.1 }}
              >
                Let's do it!
              </motion.p>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: "https://github.com/AbdeljalilRajli", label: "GitHub" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Instagram, href: "#", label: "Instagram" },
                  { icon: Globe, href: "#", label: "Website" }
                ].map(({ icon: Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition-all hover:bg-black hover:text-white"
                    aria-label={label}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -180 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 1.2 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
