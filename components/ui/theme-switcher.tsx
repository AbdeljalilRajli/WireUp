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
      className="relative w-14 h-7 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
      style={{
        background: isDark 
          ? "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)" 
          : "linear-gradient(135deg, #f1f5f9 0%, #cbd5e1 100%)",
        borderColor: isDark ? "rgba(255, 255, 255, 0.3)" : "rgba(0, 0, 0, 0.2)"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {/* Toggle Circle */}
      <motion.div
        className="absolute top-0.5 w-5 h-5 rounded-full shadow-lg flex items-center justify-center"
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #64748b 0%, #475569 100%)" 
            : "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
          boxShadow: isDark 
            ? "0 2px 8px rgba(0, 0, 0, 0.3)" 
            : "0 2px 8px rgba(0, 0, 0, 0.15)"
        }}
        animate={{
          x: isDark ? 28 : 2,
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
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Moon className="w-3 h-3 text-slate-300" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
            >
              <Sun className="w-3 h-3 text-amber-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Background Icons */}
      <div className="absolute inset-0 flex items-center justify-between px-1.5">
        <motion.div
          animate={{
            opacity: isDark ? 0.4 : 0.8,
            scale: isDark ? 0.8 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          <Sun className={`w-3 h-3 ${isDark ? 'text-amber-300' : 'text-amber-500'}`} />
        </motion.div>
        <motion.div
          animate={{
            opacity: isDark ? 0.8 : 0.4,
            scale: isDark ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <Moon className={`w-3 h-3 ${isDark ? 'text-slate-300' : 'text-slate-600'}`} />
        </motion.div>
      </div>

      {/* Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: isDark 
            ? "0 0 20px rgba(59, 130, 246, 0.3)" 
            : "0 0 20px rgba(251, 191, 36, 0.3)"
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  )
}
