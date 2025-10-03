"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    console.log('Scrolling to section:', sectionId)
    
    // Close mobile menu first
    setMobileMenuOpen(false)
    
    // Small delay to ensure menu closes before scrolling
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        console.log('Element found, scrolling...')
        const navbarHeight = 100
        const elementPosition = element.offsetTop - navbarHeight
        window.scrollTo({
          top: elementPosition,
          behavior: "smooth"
        })
      } else {
        console.log('Element not found for ID:', sectionId)
      }
    }, 100)
  }

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 z-50 w-full px-2 sm:px-4 pt-4"
    >
      <div className={`mx-auto w-full max-w-6xl rounded-2xl border-2 border-white/20 transition-all duration-300 ${
        scrolled 
          ? "bg-black/70 backdrop-blur-2xl shadow-2xl shadow-black/30" 
          : "bg-black/50 backdrop-blur-xl"
      } noise-bg`}>
        <div className="flex h-16 items-center justify-between px-3 sm:px-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center gap-2"
        >
          <Image
            src="/logo-white.png"
            alt="WireUp Logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </motion.div>

        {/* Desktop Navigation */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden items-center gap-6 md:flex"
        >
          {["Features", "Process", "Team", "Testimonials", "Contact"].map((item, index) => (
            <motion.button
              key={item}
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                scrollToSection(item.toLowerCase())
              }}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
              whileHover={{ y: -2 }}
              className="text-base font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer leading-relaxed"
            >
              {item}
            </motion.button>
          ))}
        </motion.nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden items-center gap-3 md:flex"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button size="sm">Get Started</Button>
          </motion.div>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-2 w-full max-w-6xl overflow-hidden rounded-2xl border-2 border-white/20 bg-black/70 backdrop-blur-2xl noise-bg md:hidden"
          >
            <nav className="flex flex-col gap-4 px-6 py-6">
              {["Features", "Process", "Team", "Testimonials", "Contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    console.log('Mobile menu clicked:', item.toLowerCase())
                    scrollToSection(item.toLowerCase())
                  }}
                  className="text-left text-base font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer py-3 px-3 rounded hover:bg-white/10 leading-relaxed"
                >
                  {item}
                </button>
              ))}
              <div className="flex flex-col gap-2 pt-4">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm">Get Started</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
