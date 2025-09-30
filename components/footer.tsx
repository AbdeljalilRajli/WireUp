import { Facebook, Twitter, Linkedin, Github, Mail, Phone, MapPin, Zap } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative bg-background border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      
      <div className="container relative mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-foreground">WireUp</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Revolutionizing IT recruitment with AI-powered matching and intelligent automation. Connect with the best talent, faster than ever.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                hello@wireup.com
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                San Francisco, CA
              </div>
            </div>

            <div className="flex gap-4 mt-6">
              {[
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Facebook, href: "#", label: "Facebook" }
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all hover:bg-primary hover:text-white hover:scale-110"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Platform</h3>
            <ul className="space-y-4">
              {[
                "AI Matching",
                "Talent Search",
                "Analytics Dashboard",
                "Candidate Pipeline",
                "Team Collaboration",
                "Mobile App"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Company</h3>
            <ul className="space-y-4">
              {[
                "About Us",
                "Careers",
                "Press Kit",
                "Blog",
                "Success Stories",
                "Contact"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-foreground">Resources</h3>
            <ul className="space-y-4">
              {[
                "Documentation",
                "API Reference",
                "Help Center",
                "Community",
                "Webinars",
                "Best Practices"
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground transition-all hover:text-primary hover:translate-x-1 inline-block">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h3 className="mb-2 text-2xl font-bold text-white">Stay Updated</h3>
              <p className="text-white/80">
                Get the latest insights on recruitment trends, platform updates, and success stories.
              </p>
            </div>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg bg-white/10 px-4 py-3 text-white placeholder:text-white/60 backdrop-blur-sm border border-white/20 focus:border-white/40 focus:outline-none"
              />
              <button className="rounded-lg bg-white px-6 py-3 font-medium text-primary transition-all hover:bg-white/90 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-border/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>&copy; 2025 WireUp.</span>
              <span>All rights reserved.</span>
              <span className="hidden md:inline">•</span>
              <span className="hidden md:inline">Made with ❤️ in San Francisco</span>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
                "Security"
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
