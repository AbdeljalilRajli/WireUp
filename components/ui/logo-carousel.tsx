"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import Image from "next/image"

const companies = [
  {
    name: "Microsoft",
    logo: (
      <svg viewBox="0 0 23 23" className="w-8 h-8 fill-current">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z"/>
      </svg>
    )
  },
  {
    name: "Google",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    )
  },
  {
    name: "Meta",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  },
  {
    name: "Netflix",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M5.398 0v.006c3.028 8.556 5.37 15.175 8.348 23.596 2.344.058 4.85.398 4.854.398-2.8-7.924-5.923-16.747-8.487-24zm8.489 0v9.63L18.6 22.951c-.043-7.86-.004-15.913.002-22.95zM5.398 1.05V24c1.873-.225 2.81-.312 4.715-.398v-9.22z"/>
      </svg>
    )
  },
  {
    name: "Spotify",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
      </svg>
    )
  },
  {
    name: "Uber",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M16.812 9.565v4.87c0 2.568-1.96 4.565-4.812 4.565-2.852 0-4.812-1.997-4.812-4.565v-4.87c0-2.568 1.96-4.565 4.812-4.565 2.852 0 4.812 1.997 4.812 4.565zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4z"/>
      </svg>
    )
  },
  {
    name: "Apple",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/>
      </svg>
    )
  },
  {
    name: "Amazon",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726-1.548.41-3.156.615-4.83.615-3.495 0-6.756-.705-9.78-2.116-.466-.217-.86-.445-1.188-.688-.33-.245-.49-.47-.49-.675 0-.11.02-.18.045-.23zm23.1-3.825c-.24-.375-.73-.572-1.47-.59-.74-.02-1.64.13-2.7.45-.18.06-.33.06-.42-.03-.09-.09-.06-.24.09-.42.99-.81 2.22-1.23 3.69-1.26 1.47-.03 2.55.27 3.24.9.69.63 1.035 1.44 1.035 2.43v.84c0 .24-.135.36-.405.36s-.405-.12-.405-.36v-.84c0-.54-.195-.96-.585-1.26z"/>
      </svg>
    )
  },
  {
    name: "Tesla",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M12 0L8.11 4H15.89L12 0ZM8.5 5L12 1.5L15.5 5H8.5ZM0 5V6H24V5H0ZM2 7V24H4V7H2ZM6 7V24H8V7H6ZM10 7V24H14V7H10ZM16 7V24H18V7H16ZM20 7V24H22V7H20Z"/>
      </svg>
    )
  },
  {
    name: "Adobe",
    logo: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current">
        <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624z"/>
      </svg>
    )
  }
]

interface LogoCarouselProps {
  className?: string
}

export function LogoCarousel({ className = "" }: LogoCarouselProps) {
  const [currentSet, setCurrentSet] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  
  // Split companies into sets of 5
  const companySets = []
  for (let i = 0; i < companies.length; i += 5) {
    companySets.push(companies.slice(i, i + 5))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)
      
      setTimeout(() => {
        setCurrentSet((prev) => (prev + 1) % companySets.length)
        setIsVisible(true)
      }, 500) // Half second for fade out
      
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [companySets.length])

  return (
    <div className={`${className}`}>
      <motion.p 
        className="mb-8 text-sm text-muted-foreground text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trusted by leading tech companies
      </motion.p>
      
      <div className="relative h-16 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSet}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : -20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.5,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center gap-8 md:gap-12 absolute inset-0"
          >
            {companySets[currentSet]?.map((company, index) => (
              <motion.div
                key={`${currentSet}-${company.name}`}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 0.6, scale: 1, y: 0 }}
                whileHover={{ 
                  opacity: 1, 
                  scale: 1.1,
                  transition: { duration: 0.2 }
                }}
                transition={{ 
                  duration: 0.4, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="flex items-center justify-center text-white hover:text-primary transition-colors duration-300 cursor-default"
              >
                {company.logo}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
    </div>
  )
}
