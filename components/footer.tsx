"use client"

import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:minhaghulammuhammad@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-2">
              M<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70">Full-Stack Developer & AI Enthusiast</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#about" className="hover:text-accent transition-colors flex items-center gap-2">
                  About <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-accent transition-colors flex items-center gap-2">
                  Projects <ExternalLink size={14} />
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors flex items-center gap-2">
                  Contact <ExternalLink size={14} />
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-primary-foreground/10 hover:bg-accent hover:text-accent-foreground rounded-full transition-all"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <p className="text-center text-primary-foreground/70 text-sm">
            © {currentYear} Minha. All rights reserved. Built with ❤️ using Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  )
}
