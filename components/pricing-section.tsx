"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const plans = [
  {
    name: "Starter",
    price: "$199",
    description: "Perfect for small teams and startups",
    features: [
      "Up to 10 active job postings",
      "50 candidate profiles/month",
      "Basic AI matching",
      "Email support",
      "Standard analytics",
    ],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    name: "Professional",
    price: "$499",
    description: "For growing companies with higher volume",
    features: [
      "Up to 50 active job postings",
      "Unlimited candidate profiles",
      "Advanced AI matching",
      "Priority support",
      "Advanced analytics & reporting",
      "Custom integrations",
      "Talent pipeline management",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited job postings",
      "Unlimited candidate profiles",
      "Custom AI matching models",
      "24/7 dedicated support",
      "White-label options",
      "API access",
      "SLA guarantee",
      "Advanced security & compliance",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="pricing" className="border-b border-border py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-block rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 px-4 py-2 text-sm font-semibold text-primary">
            Pricing Plans
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Choose the perfect plan for your hiring needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card
                  className={`relative h-full border-border transition-all ${
                    plan.popular ? "border-primary shadow-lg shadow-primary/20" : "hover:shadow-lg"
                  }`}
                >
                  {plan.popular && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="absolute -top-4 left-1/2 -translate-x-1/2"
                    >
                      <span className="rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                        Most Popular
                      </span>
                    </motion.div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-muted-foreground">{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && <span className="text-muted-foreground">/month</span>}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.3, delay: index * 0.15 + featureIndex * 0.05 }}
                          className="flex items-start gap-3"
                        >
                          <Check className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <motion.button
                      className={`group relative w-full px-6 py-2.5 rounded-full text-sm font-semibold flex items-center justify-center gap-2 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${
                        plan.popular 
                          ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white border border-orange-400/30 shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40" 
                          : "bg-transparent border-2 border-primary/20 text-foreground hover:bg-primary/10"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {plan.cta}
                      {plan.popular && (
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                    </motion.button>
                  </CardFooter>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
