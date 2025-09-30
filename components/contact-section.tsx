"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Send, MessageCircle, Phone, Mail } from "lucide-react"

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" className="relative bg-background section-padding overflow-hidden" ref={ref}>
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
            <MessageCircle className="mr-2 h-4 w-4" />
            Get In Touch
          </motion.div>
          <h2 className="mb-6 heading-lg font-bold tracking-tight">
            Let's Talk About{" "}
            <span className="text-primary">Your Hiring Needs</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground leading-relaxed">
            Ready to transform your recruitment process? Our team is here to help you find the perfect talent for your company.
          </p>
        </motion.div>

        {/* Centered Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto max-w-2xl"
        >
          <div className="relative rounded-3xl bg-card/50 p-8 md:p-12 backdrop-blur-sm border border-border/50 shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
            <motion.div
              className="absolute -top-6 -right-6 h-12 w-12 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 h-8 w-8 rounded-full bg-primary/10"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />

            <form className="relative space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
                    Name*
                  </label>
                  <Input 
                    id="name" 
                    placeholder="Your full name" 
                    className="border-2 border-border focus:border-primary transition-colors bg-background/50 backdrop-blur-sm" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
                    Email*
                  </label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="border-2 border-border focus:border-primary transition-colors bg-background/50 backdrop-blur-sm" 
                  />
                </div>
              </div>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="company" className="mb-2 block text-sm font-medium text-foreground">
                    Company
                  </label>
                  <Input 
                    id="company" 
                    placeholder="Your company name" 
                    className="border-2 border-border focus:border-primary transition-colors bg-background/50 backdrop-blur-sm" 
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <Input 
                    id="phone" 
                    type="tel" 
                    placeholder="+1 (555) 000-0000" 
                    className="border-2 border-border focus:border-primary transition-colors bg-background/50 backdrop-blur-sm" 
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
                  Message*
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your hiring needs, team size, and what roles you're looking to fill..."
                  rows={6}
                  className="border-2 border-border focus:border-primary transition-colors resize-none bg-background/50 backdrop-blur-sm"
                />
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 text-lg group"
                >
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="mb-8 text-muted-foreground">Or reach out to us directly</p>
          <div className="flex flex-wrap justify-center gap-8">
            <motion.a
              href="mailto:hello@wireup.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 rounded-xl bg-card/50 px-6 py-4 backdrop-blur-sm border border-border/50 transition-colors hover:border-primary/50"
            >
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-medium">hello@wireup.com</span>
            </motion.a>
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 rounded-xl bg-card/50 px-6 py-4 backdrop-blur-sm border border-border/50 transition-colors hover:border-primary/50"
            >
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-medium">+1 (555) 123-4567</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
