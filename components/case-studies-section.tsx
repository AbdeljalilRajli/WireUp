"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const caseStudies = [
  {
    title: "Tech Startup Success",
    description:
      "For a rapidly growing tech startup, we implemented our AI-powered matching system that reduced their time-to-hire by 60% while improving candidate quality scores by 45%.",
  },
  {
    title: "Enterprise Transformation",
    description:
      "We helped a Fortune 500 company modernize their recruitment process, resulting in a 40% reduction in hiring costs and a 35% improvement in employee retention rates.",
  },
  {
    title: "Scale-up Growth",
    description:
      "A mid-sized scale-up needed to triple their team in 6 months. Our platform enabled them to hire 150+ employees while maintaining quality and cultural fit.",
  },
]

export function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-foreground py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-4 inline-block rounded-md bg-[#B4FF39] px-2 py-1 text-sm font-semibold text-foreground">
            Case Studies
          </h2>
          <p className="max-w-2xl text-pretty text-lg text-background/70">
            Explore real-world examples of how we've helped companies transform their recruitment process and achieve
            remarkable results.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-background"
            >
              <h3 className="mb-3 text-xl font-bold">{study.title}</h3>
              <p className="text-pretty text-background/70">{study.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
