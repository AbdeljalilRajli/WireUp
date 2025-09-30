"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Head of Talent",
    company: "TechVentures",
    avatar: "SC",
    content:
      "WireUp has revolutionized our hiring process. We've reduced time-to-hire by 70% and the quality of candidates has never been better. The AI matching is simply incredible.",
    rating: 5,
    highlight: true,
    stats: "70% faster hiring",
  },
  {
    name: "Michael Rodriguez",
    role: "Recruitment Director",
    company: "GrowthCo",
    avatar: "MR",
    content:
      "The platform's intelligent matching saved us countless hours of screening. We're connecting with candidates who are perfect cultural and technical fits.",
    rating: 5,
    stats: "500+ hires made",
  },
  {
    name: "Emily Thompson",
    role: "VP of People",
    company: "InnovateLabs",
    avatar: "ET",
    content:
      "WireUp's analytics dashboard gives us insights we never had before. Data-driven recruitment decisions have improved our success rate dramatically.",
    rating: 5,
    stats: "95% success rate",
  },
  {
    name: "David Kim",
    role: "Talent Acquisition Lead",
    company: "StartupHub",
    avatar: "DK",
    content:
      "As a fast-growing startup, we needed a recruitment solution that could scale with us. WireUp delivered exactly that and more.",
    rating: 5,
    stats: "300% team growth",
  },
  {
    name: "Lisa Wang",
    role: "HR Director",
    company: "TechCorp",
    avatar: "LW",
    content:
      "The candidate experience through WireUp is exceptional. We're attracting top-tier talent who are genuinely excited about our opportunities.",
    rating: 5,
    stats: "98% candidate satisfaction",
  },
  {
    name: "James Wilson",
    role: "Chief People Officer",
    company: "InnovateNow",
    avatar: "JW",
    content:
      "WireUp's verification process gives us confidence in every hire. The quality assurance and skill validation are game-changers.",
    rating: 5,
    stats: "100% verified profiles",
  },
  {
    name: "Alex Chen",
    role: "Head of Engineering",
    company: "DevScale",
    avatar: "AC",
    content:
      "The platform's technical assessment tools helped us identify top-tier developers who perfectly matched our tech stack and company culture.",
    rating: 5,
    stats: "90% retention rate",
  },
]

export function TestimonialsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="testimonials" className="relative bg-background py-16 md:py-20 overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-4 inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm"
          >
            <Star className="mr-2 h-4 w-4 fill-primary" />
            Customer Success Stories
          </motion.div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Loved by{" "}
            <span className="text-primary">talent leaders</span>{" "}
            worldwide
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join thousands of companies who have transformed their hiring process with WireUp
          </p>
        </motion.div>

        {/* Featured testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          {testimonials.filter(t => t.highlight).map((testimonial, index) => (
            <Card key={index} className="mx-auto max-w-4xl border-0 bg-gradient-to-br from-primary to-primary/80 text-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid gap-8 md:grid-cols-3 md:gap-12">
                  <div className="md:col-span-2">
                    <div className="mb-6 flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-white/80 text-white/80" />
                      ))}
                    </div>
                    <blockquote className="text-2xl font-medium leading-relaxed md:text-3xl">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="h-16 w-16 border-2 border-white/20">
                        <AvatarFallback className="bg-white/20 text-white text-lg font-bold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-xl font-semibold">{testimonial.name}</div>
                        <div className="text-white/80">{testimonial.role}</div>
                        <div className="text-white/60">{testimonial.company}</div>
                      </div>
                    </div>
                    <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                      <div className="text-2xl font-bold">{testimonial.stats}</div>
                      <div className="text-sm text-white/80">Improvement</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </motion.div>

        {/* Grid of testimonials */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.filter(t => !t.highlight).map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <motion.div 
                whileHover={{ y: -8, scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="group h-full border-0 bg-card/50 backdrop-blur-sm transition-all hover:bg-card hover:shadow-xl hover:shadow-primary/10">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center justify-between">
                      <div className="flex gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                        ))}
                      </div>
                      <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {testimonial.stats}
                      </div>
                    </div>
                    <blockquote className="mb-6 text-pretty text-foreground leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 border border-primary/20">
                        <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                          {testimonial.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-xs text-muted-foreground">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              { number: "4.9/5", label: "Average Rating" },
              { number: "10K+", label: "Happy Customers" },
              { number: "500K+", label: "Successful Hires" },
              { number: "99%", label: "Uptime" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
