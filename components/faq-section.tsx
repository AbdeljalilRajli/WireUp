"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { HelpCircle } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const faqs = [
    {
      question: "How does WireUp's AI matching work?",
      answer: "Our AI analyzes candidate profiles, skills, experience, and cultural fit indicators to match them with relevant job opportunities. The system learns from successful placements to continuously improve matching accuracy."
    },
    {
      question: "What types of IT roles do you specialize in?",
      answer: "We specialize in all areas of IT including software development, DevOps, cybersecurity, data science, cloud architecture, mobile development, and technical leadership roles from junior to C-level positions."
    },
    {
      question: "How long does the typical recruitment process take?",
      answer: "Our streamlined process typically takes 2-4 weeks from initial job posting to final placement. This includes candidate sourcing, screening, interviews, and offer negotiation."
    },
    {
      question: "Do you offer any guarantees on placements?",
      answer: "Yes, we offer a 90-day replacement guarantee. If a placed candidate doesn't work out within the first 90 days, we'll find a replacement at no additional cost."
    },
    {
      question: "What are your pricing models?",
      answer: "We offer flexible pricing including contingency-based fees (15-25% of first-year salary), retained search options, and volume discounts for multiple hires. Contact us for a customized quote."
    },
    {
      question: "Can you handle remote and international placements?",
      answer: "Absolutely! We have experience with remote work arrangements and international placements. We handle visa requirements, time zone coordination, and cultural integration support."
    }
  ]

  return (
    <section id="faq" className="relative bg-background section-padding overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <HelpCircle className="mr-2 h-4 w-4" />
            FAQ
          </motion.div>
          <h2 className="mb-6 heading-lg font-bold tracking-tight">
            Frequently Asked{" "}
            <span className="text-primary">Questions</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Get answers to common questions about our recruitment services and process.
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left hover:text-primary pr-16 md:pr-20">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  )
}
