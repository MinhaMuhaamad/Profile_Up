"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setFormData({ name: "", email: "", message: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute top-20 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and interesting projects. Feel free to reach out!
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Info - Centered */}
          <div
            className={`flex flex-col sm:flex-row justify-center gap-8 ${inView ? "animate-slide-in-left" : "opacity-0"}`}
          >
            <div className="flex gap-4 items-start sm:items-center">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:minhaghulammuhammad@gmail.com"
                  className="text-foreground font-medium hover:text-accent transition-colors"
                >
                  minhaghulammuhammad@gmail.com
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start sm:items-center">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a href="tel:03146842477" className="text-foreground font-medium hover:text-accent transition-colors">
                  +92 314 684 2477
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start sm:items-center">
              <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-foreground font-medium">Faisalabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Centered */}
          <form
            onSubmit={handleSubmit}
            className={`max-w-2xl mx-auto w-full p-8 bg-background rounded-2xl border border-border ${
              inView ? "animate-slide-in-right" : "opacity-0"
            }`}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-3 bg-secondary border border-border rounded-lg focus:outline-none focus:border-accent transition-all duration-300 focus:ring-2 focus:ring-accent/20 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium flex items-center justify-center gap-2 hover:scale-105 active:scale-95 hover:shadow-lg"
              >
                <Send size={18} />
                Send Message
              </button>

              {submitted && (
                <div className="p-4 bg-accent/10 text-accent rounded-lg text-sm font-medium animate-fade-in-up">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
