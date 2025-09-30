"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Brain, Search, Users, TrendingUp, Zap, Database, Target, Shield, Clock } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { GridPattern } from "@/components/ui/grid-pattern"
const features = [
  {
    icon: Brain,
    title: "AI-Powered Matching",
    description: "Our advanced AI algorithms analyze skills, experience, and cultural fit to find perfect matches between candidates and companies.",
    color: "bg-[#efe9e9]",
    textColor: "text-[#262626]",
    size: "md:col-span-1",
    highlight: true,
  },
  {
    icon: Search,
    title: "Smart Talent Search",
    description: "Advanced search and filtering capabilities to find the exact talent you need.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
  {
    icon: Users,
    title: "Candidate Pipeline",
    description: "Build and manage your talent pipeline with automated candidate nurturing.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
  {
    icon: Zap,
    title: "Instant Notifications",
    description: "Real-time alerts when perfect candidates match your requirements.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
  {
    icon: Database,
    title: "Analytics Dashboard",
    description: "Comprehensive recruitment analytics and performance tracking.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Target specific skills, experience levels, and locations with laser precision.",
    color: "bg-[#efe9e9]",
    textColor: "text-[#262626]",
    size: "md:col-span-1",
    highlight: true,
  },
  {
    icon: Shield,
    title: "Verified Profiles",
    description: "All candidates undergo thorough verification and skill assessment.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
  {
    icon: Clock,
    title: "Fast Hiring",
    description: "Reduce time-to-hire by up to 70% with our streamlined process.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "Monitor recruitment KPIs and optimize your hiring funnel with detailed insights.",
    color: "bg-card",
    textColor: "text-foreground",
    size: "md:col-span-1",
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="relative bg-background py-16 md:py-20 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <GridPattern className="absolute inset-0 opacity-20" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-md bg-[#efe9e9] px-3 py-1 text-sm font-semibold text-[#262626]">
            Platform Features
          </div>
          <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
            Everything you need to{" "}
            <span className="text-primary">hire smarter</span>
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground leading-relaxed">
            Our comprehensive recruitment platform combines AI-powered matching with intuitive tools to streamline your hiring process and connect you with exceptional IT talent.
          </p>
        </motion.div>

        {/* Advanced Feature Showcase */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -12, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative h-full"
              >
                <Card className={`h-full border-0 ${feature.color} ${feature.textColor} relative overflow-hidden shadow-2xl`}>
                  {/* Dynamic background patterns */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/30 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl" />
                  </div>
                  
                  {/* Animated border gradient */}
                  <motion.div
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 via-transparent to-primary/20 opacity-0 group-hover:opacity-100"
                    animate={{
                      background: [
                        "linear-gradient(0deg, rgba(236,97,50,0.2) 0%, transparent 50%, rgba(236,97,50,0.2) 100%)",
                        "linear-gradient(90deg, rgba(236,97,50,0.2) 0%, transparent 50%, rgba(236,97,50,0.2) 100%)",
                        "linear-gradient(180deg, rgba(236,97,50,0.2) 0%, transparent 50%, rgba(236,97,50,0.2) 100%)",
                        "linear-gradient(270deg, rgba(236,97,50,0.2) 0%, transparent 50%, rgba(236,97,50,0.2) 100%)",
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Header with floating icon */}
                    <div className="mb-6 flex items-start justify-between">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2, 
                          rotate: [0, -5, 5, -5, 0],
                          y: -5
                        }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                      >
                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                          feature.highlight 
                            ? "bg-gradient-to-br from-primary/30 to-primary/10 shadow-lg shadow-primary/25" 
                            : "bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30"
                        }`}>
                          <feature.icon className="h-8 w-8 text-primary drop-shadow-sm" />
                        </div>
                        
                        {/* Floating particles */}
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            y: [0, -10, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        />
                        <motion.div
                          className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary/60 rounded-full opacity-0 group-hover:opacity-100"
                          animate={{
                            y: [0, -8, 0],
                            opacity: [0, 0.6, 0]
                          }}
                          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        />
                      </motion.div>
                      
                      {feature.highlight && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0, rotate: -10 }}
                          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : { opacity: 0, scale: 0, rotate: -10 }}
                          transition={{ duration: 0.6, delay: 0.8 + index * 0.1, type: "spring" }}
                          className="rounded-full bg-gradient-to-r from-primary to-primary/80 px-4 py-2 text-xs font-bold text-white shadow-lg"
                        >
                          ⭐ Popular
                        </motion.div>
                      )}
                    </div>

                    {/* Content with better typography */}
                    <div className="flex-1 space-y-4">
                      <motion.h3 
                        className="text-2xl font-bold tracking-tight"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                      >
                        {feature.title}
                      </motion.h3>
                      
                      <p className={`text-base leading-relaxed ${
                        feature.textColor === "text-[#262626]" ? "text-[#262626]/80" : "text-muted-foreground"
                      }`}>
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Enhanced CTA */}
                    <motion.div
                      className="mt-8 flex items-center gap-3 text-sm font-semibold group-hover:gap-4 transition-all cursor-pointer"
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-primary">Explore Feature</span>
                      <motion.div
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary group-hover:text-white transition-all"
                        whileHover={{ rotate: 45 }}
                      >
                        <ArrowRight className="h-4 w-4 text-primary group-hover:text-white" />
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="mb-6 text-lg text-muted-foreground">
            Ready to transform your hiring process?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-primary/90"
          >
            Get Started Today
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
