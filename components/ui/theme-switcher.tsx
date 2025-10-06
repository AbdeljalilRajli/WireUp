"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import { Sun, Moon } from "lucide-react"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="w-14 h-7 rounded-full bg-muted/50 border border-border/50" />
    )
  }

  const isDark = theme === "dark"

  return (
    <motion.button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative w-16 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 overflow-hidden"
      style={{
        background: isDark 
          ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" 
          : "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        border: isDark 
          ? "1px solid rgba(255, 255, 255, 0.1)" 
          : "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: isDark
          ? "0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
          : "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.1)"
      }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Track with sun/moon indicators */}
      <div className="relative w-full h-full">
        {/* Sun (Left) */}
        <div className={`absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center transition-opacity duration-300 ${isDark ? 'opacity-40' : 'opacity-100'}`}>
          <Sun className="w-3 h-3 text-amber-500" />
        </div>
        
        {/* Moon (Right) */}
        <div className={`absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 flex items-center justify-center transition-opacity duration-300 ${isDark ? 'opacity-100' : 'opacity-40'}`}>
          <Moon className="w-3 h-3 text-slate-300" />
        </div>
        
        {/* Toggle Handle */}
        <motion.div
          className="absolute top-0.5 w-7 h-7 rounded-full shadow-lg flex items-center justify-center z-10"
          style={{
            background: isDark 
              ? "linear-gradient(135deg, #e2e8f0 0%, #cbd5e1 100%)" 
              : "linear-gradient(135deg, #fef3c7 0%, #f59e0b 100%)",
            boxShadow: isDark 
              ? "0 2px 8px rgba(0, 0, 0, 0.3)" 
              : "0 2px 8px rgba(0, 0, 0, 0.15)"
          }}
          animate={{
            x: isDark ? 34 : 4,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
          }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.div
                key="moon"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Moon className="w-3 h-3 text-slate-700" />
              </motion.div>
            ) : (
              <motion.div
                key="sun"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                <Sun className="w-3 h-3 text-amber-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.button>
  )
}
