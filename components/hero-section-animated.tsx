"use client"

import { ArrowRight, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export function HeroSectionAnimated() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Ensure everything loads together
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])
  return (
    <div className="relative min-h-[100svh] sm:min-h-screen overflow-hidden bg-background dark:bg-background">
      {/* Animated Wire Background */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* WireUp Orange Gradients */}
            <radialGradient id="wireUpPulse1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="30%" stopColor="rgba(236,97,50,1)" />
              <stop offset="70%" stopColor="rgba(236,97,50,0.8)" />
              <stop offset="100%" stopColor="rgba(236,97,50,0)" />
            </radialGradient>
            <radialGradient id="wireUpPulse2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.9)" />
              <stop offset="25%" stopColor="rgba(236,97,50,0.9)" />
              <stop offset="60%" stopColor="rgba(200,80,40,0.7)" />
              <stop offset="100%" stopColor="rgba(200,80,40,0)" />
            </radialGradient>
            <radialGradient id="wireUpPulse3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(255,255,255,1)" />
              <stop offset="35%" stopColor="rgba(236,97,50,1)" />
              <stop offset="75%" stopColor="rgba(200,80,40,0.6)" />
              <stop offset="100%" stopColor="rgba(200,80,40,0)" />
            </radialGradient>

            {/* Hero text background gradients */}
            <radialGradient id="heroTextBg" cx="30%" cy="50%" r="70%">
              <stop offset="0%" stopColor="rgba(236,97,50,0.15)" />
              <stop offset="40%" stopColor="rgba(236,97,50,0.08)" />
              <stop offset="80%" stopColor="rgba(200,80,40,0.05)" />
              <stop offset="100%" stopColor="rgba(0,0,0,0)" />
            </radialGradient>

            {/* Wire thread gradients - Dark Mode */}
            <linearGradient id="wireThread1Dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,45,45,1)" />
              <stop offset="15%" stopColor="rgba(236,97,50,0.8)" />
              <stop offset="85%" stopColor="rgba(236,97,50,0.8)" />
              <stop offset="100%" stopColor="rgba(45,45,45,1)" />
            </linearGradient>
            <linearGradient id="wireThread2Dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,45,45,1)" />
              <stop offset="12%" stopColor="rgba(236,97,50,0.7)" />
              <stop offset="88%" stopColor="rgba(236,97,50,0.7)" />
              <stop offset="100%" stopColor="rgba(45,45,45,1)" />
            </linearGradient>
            <linearGradient id="wireThread3Dark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(45,45,45,1)" />
              <stop offset="18%" stopColor="rgba(200,80,40,0.8)" />
              <stop offset="82%" stopColor="rgba(200,80,40,0.8)" />
              <stop offset="100%" stopColor="rgba(45,45,45,1)" />
            </linearGradient>

            {/* Wire thread gradients - Light Mode */}
            <linearGradient id="wireThread1Light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(248,250,252,1)" />
              <stop offset="15%" stopColor="rgba(236,97,50,0.6)" />
              <stop offset="85%" stopColor="rgba(236,97,50,0.6)" />
              <stop offset="100%" stopColor="rgba(248,250,252,1)" />
            </linearGradient>
            <linearGradient id="wireThread2Light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(248,250,252,1)" />
              <stop offset="12%" stopColor="rgba(236,97,50,0.5)" />
              <stop offset="88%" stopColor="rgba(236,97,50,0.5)" />
              <stop offset="100%" stopColor="rgba(248,250,252,1)" />
            </linearGradient>
            <linearGradient id="wireThread3Light" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(248,250,252,1)" />
              <stop offset="18%" stopColor="rgba(200,80,40,0.6)" />
              <stop offset="82%" stopColor="rgba(200,80,40,0.6)" />
              <stop offset="100%" stopColor="rgba(248,250,252,1)" />
            </linearGradient>

            {/* Glow filter */}
            <filter id="wireGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <g>
            {/* Hero text background glow */}
            <ellipse
              cx="300"
              cy="350"
              rx="400"
              ry="200"
              fill="url(#heroTextBg)"
              opacity="0.6"
            />
            <ellipse
              cx="350"
              cy="320"
              rx="500"
              ry="250"
              fill="url(#heroTextBg)"
              opacity="0.4"
            />

            {/* Animated Wire Threads - Dark Mode - EXACT V0 COPY */}
            <g className="dark:block hidden">
              {/* Thread 1 - Smooth S-curve from bottom-left to right */}
              <path id="thread1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#wireThread1Dark)" strokeWidth="0.8" fill="none" opacity="0.8" />
              <circle r="2" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#thread1" /></animateMotion></circle>

              {/* Thread 2 - Gentle wave flow */}
              <path id="thread2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#wireThread2Dark)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle r="3" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#thread2" /></animateMotion></circle>

              {/* Thread 3 - Organic curve */}
              <path id="thread3" d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330" stroke="url(#wireThread3Dark)" strokeWidth="1.2" fill="none" opacity="0.8" />
              <circle r="2.5" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#thread3" /></animateMotion></circle>

              {/* Thread 4 - Flowing curve */}
              <path id="thread4" d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390" stroke="url(#wireThread1Dark)" strokeWidth="0.6" fill="none" opacity="0.6" />
              <circle r="1.5" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#thread4" /></animateMotion></circle>

              {/* Thread 5 - Natural wave */}
              <path id="thread5" d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350" stroke="url(#wireThread2Dark)" strokeWidth="1.0" fill="none" opacity="0.7" />
              <circle r="2.2" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#thread5" /></animateMotion></circle>

              {/* Thread 6 - Smooth flow */}
              <path id="thread6" d="M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410" stroke="url(#wireThread3Dark)" strokeWidth="1.3" fill="none" opacity="0.6" />
              <circle r="2.8" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.2s" repeatCount="indefinite"><mpath href="#thread6" /></animateMotion></circle>

              {/* Thread 7 - Organic S-curve */}
              <path id="thread7" d="M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335" stroke="url(#wireThread1Dark)" strokeWidth="0.9" fill="none" opacity="0.8" />
              <circle r="2" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.8s" repeatCount="indefinite"><mpath href="#thread7" /></animateMotion></circle>

              {/* Thread 8 - Gentle wave */}
              <path id="thread8" d="M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380" stroke="url(#wireThread2Dark)" strokeWidth="1.4" fill="none" opacity="0.7" />
              <circle r="3" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.8s" repeatCount="indefinite"><mpath href="#thread8" /></animateMotion></circle>

              {/* Thread 9 - Thin flowing curve */}
              <path id="thread9" d="M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345" stroke="url(#wireThread3Dark)" strokeWidth="0.5" fill="none" opacity="0.6" />
              <circle r="1.2" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="6s" repeatCount="indefinite"><mpath href="#thread9" /></animateMotion></circle>

              {/* Thread 10 - Medium thick wave */}
              <path id="thread10" d="M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375" stroke="url(#wireThread1Dark)" strokeWidth="1.1" fill="none" opacity="0.8" />
              <circle r="2.5" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.3s" repeatCount="indefinite"><mpath href="#thread10" /></animateMotion></circle>

              {/* Thread 11 - Very thin thread */}
              <path id="thread11" d="M70 727 Q210 605 360 555 Q510 505 650 535 Q790 565 930 475 Q1070 385 1260 355" stroke="url(#wireThread2Dark)" strokeWidth="0.4" fill="none" opacity="0.5" />
              <circle r="1" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.7s" repeatCount="indefinite"><mpath href="#thread11" /></animateMotion></circle>

              {/* Thread 12 - Thick flowing line */}
              <path id="thread12" d="M110 738 Q270 645 430 595 Q590 545 730 575 Q870 605 1010 515 Q1150 425 1380 395" stroke="url(#wireThread3Dark)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle r="3.2" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.7s" repeatCount="indefinite"><mpath href="#thread12" /></animateMotion></circle>

              {/* Thread 13 - Thin organic curve */}
              <path id="thread13" d="M45 718 Q185 588 325 538 Q465 488 605 518 Q745 548 885 458 Q1025 368 1220 338" stroke="url(#wireThread1Dark)" strokeWidth="0.7" fill="none" opacity="0.6" />
              <circle r="1.8" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.3s" repeatCount="indefinite"><mpath href="#thread13" /></animateMotion></circle>

              {/* Thread 14 - Medium wave */}
              <path id="thread14" d="M130 721 Q290 630 460 580 Q630 530 770 560 Q910 590 1050 500 Q1190 410 1350 380" stroke="url(#wireThread2Dark)" strokeWidth="1.0" fill="none" opacity="0.8" />
              <circle r="2.3" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.9s" repeatCount="indefinite"><mpath href="#thread14" /></animateMotion></circle>

              {/* Thread 15 - Ultra thin */}
              <path id="thread15" d="M25 713 Q165 583 305 533 Q445 483 585 513 Q725 543 865 453 Q1005 363 1200 333" stroke="url(#wireThread3Dark)" strokeWidth="0.3" fill="none" opacity="0.4" />
              <circle r="0.8" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="6.2s" repeatCount="indefinite"><mpath href="#thread15" /></animateMotion></circle>

              {/* Thread 16 - Thick prominent line */}
              <path id="thread16" d="M85 719 Q235 605 385 555 Q535 505 675 535 Q815 565 955 475 Q1095 385 1320 355" stroke="url(#wireThread1Dark)" strokeWidth="1.5" fill="none" opacity="0.9" />
              <circle r="3.2" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.1s" repeatCount="indefinite"><mpath href="#thread16" /></animateMotion></circle>
            </g>

            {/* Animated Wire Threads - Light Mode - EXACT V0 COPY */}
            <g className="dark:hidden block">
              {/* Thread 1 - Smooth S-curve from bottom-left to right */}
              <path id="threadLight1" d="M50 720 Q200 590 350 540 Q500 490 650 520 Q800 550 950 460 Q1100 370 1200 340" stroke="url(#wireThread1Light)" strokeWidth="0.8" fill="none" opacity="0.6" />
              <circle r="2" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4s" repeatCount="indefinite"><mpath href="#threadLight1" /></animateMotion></circle>

              {/* Thread 2 - Gentle wave flow */}
              <path id="threadLight2" d="M80 730 Q250 620 400 570 Q550 520 700 550 Q850 580 1000 490 Q1150 400 1300 370" stroke="url(#wireThread2Light)" strokeWidth="1.5" fill="none" opacity="0.5" />
              <circle r="3" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5s" repeatCount="indefinite"><mpath href="#threadLight2" /></animateMotion></circle>

              {/* Thread 3 - Organic curve */}
              <path id="threadLight3" d="M20 710 Q180 580 320 530 Q460 480 600 510 Q740 540 880 450 Q1020 360 1200 330" stroke="url(#wireThread3Light)" strokeWidth="1.2" fill="none" opacity="0.6" />
              <circle r="2.5" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.5s" repeatCount="indefinite"><mpath href="#threadLight3" /></animateMotion></circle>

              {/* Thread 4 - Flowing curve */}
              <path id="threadLight4" d="M120 740 Q280 640 450 590 Q620 540 770 570 Q920 600 1070 510 Q1220 420 1350 390" stroke="url(#wireThread1Light)" strokeWidth="0.6" fill="none" opacity="0.4" />
              <circle r="1.5" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.5s" repeatCount="indefinite"><mpath href="#threadLight4" /></animateMotion></circle>

              {/* Thread 5 - Natural wave */}
              <path id="threadLight5" d="M60 725 Q220 600 380 550 Q540 500 680 530 Q820 560 960 470 Q1100 380 1280 350" stroke="url(#wireThread2Light)" strokeWidth="1.0" fill="none" opacity="0.5" />
              <circle r="2.2" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.2s" repeatCount="indefinite"><mpath href="#threadLight5" /></animateMotion></circle>

              {/* Thread 6 - Smooth flow */}
              <path id="threadLight6" d="M150 735 Q300 660 480 610 Q660 560 800 590 Q940 620 1080 530 Q1220 440 1400 410" stroke="url(#wireThread3Light)" strokeWidth="1.3" fill="none" opacity="0.4" />
              <circle r="2.8" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.2s" repeatCount="indefinite"><mpath href="#threadLight6" /></animateMotion></circle>

              {/* Thread 7 - Organic S-curve */}
              <path id="threadLight7" d="M40 715 Q190 585 340 535 Q490 485 630 515 Q770 545 910 455 Q1050 365 1250 335" stroke="url(#wireThread1Light)" strokeWidth="0.9" fill="none" opacity="0.6" />
              <circle r="2" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.8s" repeatCount="indefinite"><mpath href="#threadLight7" /></animateMotion></circle>

              {/* Thread 8 - Gentle wave */}
              <path id="threadLight8" d="M100 728 Q260 630 420 580 Q580 530 720 560 Q860 590 1000 500 Q1140 410 1320 380" stroke="url(#wireThread2Light)" strokeWidth="1.4" fill="none" opacity="0.5" />
              <circle r="3" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.8s" repeatCount="indefinite"><mpath href="#threadLight8" /></animateMotion></circle>

              {/* Thread 9 - Thin flowing curve */}
              <path id="threadLight9" d="M30 722 Q170 595 310 545 Q450 495 590 525 Q730 555 870 465 Q1010 375 1180 345" stroke="url(#wireThread3Light)" strokeWidth="0.5" fill="none" opacity="0.4" />
              <circle r="1.2" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="6s" repeatCount="indefinite"><mpath href="#threadLight9" /></animateMotion></circle>

              {/* Thread 10 - Medium thick wave */}
              <path id="threadLight10" d="M90 732 Q240 625 390 575 Q540 525 680 555 Q820 585 960 495 Q1100 405 1300 375" stroke="url(#wireThread1Light)" strokeWidth="1.1" fill="none" opacity="0.6" />
              <circle r="2.5" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.3s" repeatCount="indefinite"><mpath href="#threadLight10" /></animateMotion></circle>

              {/* Thread 11 - Very thin thread */}
              <path id="threadLight11" d="M70 727 Q210 605 360 555 Q510 505 650 535 Q790 565 930 475 Q1070 385 1260 355" stroke="url(#wireThread2Light)" strokeWidth="0.4" fill="none" opacity="0.3" />
              <circle r="1" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.7s" repeatCount="indefinite"><mpath href="#threadLight11" /></animateMotion></circle>

              {/* Thread 12 - Thick flowing line */}
              <path id="threadLight12" d="M110 738 Q270 645 430 595 Q590 545 730 575 Q870 605 1010 515 Q1150 425 1380 395" stroke="url(#wireThread3Light)" strokeWidth="1.5" fill="none" opacity="0.5" />
              <circle r="3.2" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.7s" repeatCount="indefinite"><mpath href="#threadLight12" /></animateMotion></circle>

              {/* Thread 13 - Thin organic curve */}
              <path id="threadLight13" d="M45 718 Q185 588 325 538 Q465 488 605 518 Q745 548 885 458 Q1025 368 1220 338" stroke="url(#wireThread1Light)" strokeWidth="0.7" fill="none" opacity="0.4" />
              <circle r="1.8" fill="url(#wireUpPulse3)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="5.3s" repeatCount="indefinite"><mpath href="#threadLight13" /></animateMotion></circle>

              {/* Thread 14 - Medium wave */}
              <path id="threadLight14" d="M130 721 Q290 630 460 580 Q630 530 770 560 Q910 590 1050 500 Q1190 410 1350 380" stroke="url(#wireThread2Light)" strokeWidth="1.0" fill="none" opacity="0.6" />
              <circle r="2.3" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.9s" repeatCount="indefinite"><mpath href="#threadLight14" /></animateMotion></circle>

              {/* Thread 15 - Ultra thin */}
              <path id="threadLight15" d="M25 713 Q165 583 305 533 Q445 483 585 513 Q725 543 865 453 Q1005 363 1200 333" stroke="url(#wireThread3Light)" strokeWidth="0.3" fill="none" opacity="0.2" />
              <circle r="0.8" fill="url(#wireUpPulse1)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="6.2s" repeatCount="indefinite"><mpath href="#threadLight15" /></animateMotion></circle>

              {/* Thread 16 - Thick prominent line */}
              <path id="threadLight16" d="M85 719 Q235 605 385 555 Q535 505 675 535 Q815 565 955 475 Q1095 385 1320 355" stroke="url(#wireThread1Light)" strokeWidth="1.5" fill="none" opacity="0.7" />
              <circle r="3.2" fill="url(#wireUpPulse2)" opacity="1" filter="url(#wireGlow)"><animateMotion dur="4.1s" repeatCount="indefinite"><mpath href="#threadLight16" /></animateMotion></circle>
            </g>
          </g>
        </svg>
      </motion.div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-[100svh] sm:min-h-screen px-4 sm:px-6 lg:px-12 max-w-6xl mx-auto pt-24 sm:pt-28 md:pt-32 lg:pt-36 xl:pt-40 pb-8 sm:pb-12 md:pb-16">
        {/* Trial Badge */}
        <motion.div 
          className="mb-4 sm:mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 text-sm font-semibold text-primary">
            <Star className="mr-2 h-4 w-4 fill-primary" />
            Find Your Dream Job Today
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          className="text-foreground text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-4 sm:mb-6 md:mb-8 text-balance"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Connect Your Career
          <br />
          with{" "}
          <span className="text-primary">
            WireUp
          </span>
        </motion.h1>

        <motion.p 
          className="text-muted-foreground text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-2xl xl:max-w-3xl text-pretty leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join thousands of professionals who found their perfect match.
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          Connect with top employers and accelerate your career journey.
        </motion.p>

        {/* CTA Button - Original Style */}
        <motion.button
          className="relative bg-primary text-white px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg text-base sm:text-lg md:text-xl font-medium tracking-wide transition-colors duration-200 hover:bg-primary/90 flex items-center gap-2 md:gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
          whileTap={{
            scale: 0.98,
            transition: { duration: 0.1 }
          }}
        >
          Find Jobs
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-200 group-hover:translate-x-0.5" />
        </motion.button>
      </main>
    </div>
  )
}
