"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, Mail, Award, Star } from "lucide-react"

const team = [
  {
    name: "John Smith",
    role: "CEO and Founder",
    description:
      "10+ years of experience in digital recruitment. Expertise in talent acquisition and business development.",
    avatar: "JS",
    experience: "10+ Years",
    speciality: "Leadership",
    rating: 4.9,
  },
  {
    name: "Jane Doe",
    role: "Director of Operations",
    description: "7+ years of experience in project management and team leadership. Strong organizational skills.",
    avatar: "JD",
    experience: "7+ Years",
    speciality: "Operations",
    rating: 4.8,
  },
  {
    name: "Michael Brown",
    role: "Senior Recruiter",
    description: "5+ years of experience in tech recruitment. Specialized in engineering and product roles.",
    avatar: "MB",
    experience: "5+ Years",
    speciality: "Engineering",
    rating: 4.9,
  },
  {
    name: "Emily Johnson",
    role: "Marketing Manager",
    description: "8+ years of experience in digital marketing. Skilled in employer branding and content strategy.",
    avatar: "EJ",
    experience: "8+ Years",
    speciality: "Marketing",
    rating: 4.7,
  },
  {
    name: "Brian Williams",
    role: "Senior Consultant",
    description: "12+ years of experience in HR consulting. Expert in recruitment strategy and process optimization.",
    avatar: "BW",
    experience: "12+ Years",
    speciality: "Strategy",
    rating: 5.0,
  },
  {
    name: "Sarah Kim",
    role: "Data Analyst",
    description: "6+ years of experience in data analytics. Specialized in recruitment metrics and insights.",
    avatar: "SK",
    experience: "6+ Years",
    speciality: "Analytics",
    rating: 4.8,
  },
]

export function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="team" className="bg-background section-padding" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-block rounded-md bg-[#efe9e9] px-3 py-1 text-sm font-semibold text-[#262626]">
            Team
          </div>
          <h2 className="mb-6 heading-lg font-bold tracking-tight">
            Meet our{" "}
            <span className="text-primary">recruitment experts</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the talented individuals who make up our recruitment team. With a diverse range of skills and
            expertise, we work together to deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid grid-responsive md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card border border-border/50 hover:border-primary/20 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-lg font-bold text-foreground">
                      {member.avatar}
                    </div>
                    <div className="flex gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                        <Linkedin className="h-4 w-4" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary hover:text-white transition-colors">
                        <Mail className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-foreground">{member.name}</h3>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                    
                    <div className="flex gap-2">
                      <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground">
                        {member.experience}
                      </span>
                      <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-foreground">
                        {member.speciality}
                      </span>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="rounded-full border-2 border-foreground bg-foreground px-8 py-3 font-semibold text-background transition-all hover:bg-background hover:text-foreground">
            See all team
          </button>
        </motion.div>
      </div>
    </section>
  )
}
