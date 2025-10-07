"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Plus, Minus, ListTodo } from "lucide-react"

const processes = [
  {
    number: "01",
    title: "Consultation",
    description:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current recruitment challenges. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    number: "02",
    title: "Research and Strategy",
    description:
      "We conduct thorough market research and develop a comprehensive recruitment strategy aligned with your business objectives and industry best practices.",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Our team implements the recruitment strategy, leveraging our platform's AI-powered tools and automation to streamline your hiring process.",
  },
  {
    number: "04",
    title: "Monitoring and Optimization",
    description:
      "We continuously monitor performance metrics and optimize the recruitment process to ensure maximum efficiency and quality of hires.",
  },
  {
    number: "05",
    title: "Reporting and Communication",
    description:
      "Regular reports and transparent communication keep you informed about progress, metrics, and insights throughout the recruitment journey.",
  },
  {
    number: "06",
    title: "Continual Improvement",
    description:
      "We believe in ongoing optimization. Our team regularly reviews and refines strategies to adapt to market changes and improve results.",
  },
]

export function ProcessSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="process" className="bg-background section-padding" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 text-sm font-semibold text-primary">
            <ListTodo className="mr-2 h-4 w-4" />
            Our Working Process
          </div>
          <h2 className="mb-6 heading-lg font-bold tracking-tight">
            Step-by-step guide to our proven{" "}
            <span className="text-primary">recruitment methodology</span>
          </h2>
        </motion.div>

        <div className="mx-auto max-w-4xl space-y-4">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                className={`overflow-hidden rounded-3xl border-2 border-foreground transition-all ${
                  openIndex === index ? "bg-primary" : "bg-muted"
                }`}
                animate={{ height: openIndex === index ? "auto" : "96px" }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="relative flex w-full items-center p-6 pr-24 sm:pr-28 text-left"
                >
                  <div className="flex items-center gap-4 flex-1 min-w-0">
                    <span className={`text-3xl font-bold w-10 sm:w-12 text-center ${
                      openIndex === index ? "text-white" : "text-foreground"
                    }`}>
                      {process.number}
                    </span>
                    <h3 className={`text-xl leading-snug font-bold break-words hyphens-auto text-pretty ${
                      openIndex === index ? "text-white" : "text-foreground"
                    }`}>
                      {process.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 absolute right-6 sm:right-8 top-1/2 -translate-y-1/2 ${
                      openIndex === index ? "border-white bg-white/20" : "border-foreground bg-background"
                    }`}
                  >
                    {openIndex === index ? (
                      <Minus
                        className={`h-5 w-5 ${openIndex === index ? "text-white" : "text-foreground"}`}
                      />
                    ) : (
                      <Plus
                        className={`h-5 w-5 ${openIndex === index ? "text-white" : "text-foreground"}`}
                      />
                    )}
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    opacity: openIndex === index ? 1 : 0,
                    height: openIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className={`ml-16 text-pretty ${
                      openIndex === index ? "text-white/80" : "text-foreground/70"
                    }`}>
                      {process.description}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
