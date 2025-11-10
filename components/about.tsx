"use client"

import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <section id="about" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            About Me
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        <div className={`max-w-3xl mx-auto space-y-6 ${inView ? "animate-slide-in-left" : "opacity-0"}`}>
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm currently in my 7th semester of Software Engineering at COMSATS University. With a strong foundation in
            computer science and hands-on experience in full-stack development, I'm passionate about creating scalable
            and intelligent solutions.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My journey includes internships in frontend development and WordPress, where I gained practical experience
            optimizing UI performance and integrating RESTful APIs. I'm particularly interested in the intersection of
            web development and artificial intelligence.
          </p>
          <div className="pt-4">
            <a
              href="#projects"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-all font-medium"
            >
              Explore My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
