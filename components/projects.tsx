"use client"

import { useInView } from "react-intersection-observer"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const projects = [
    {
      title: "Intellifit - AI-Powered Fitness Platform",
      description:
        "A responsive, AI-driven fitness and nutrition platform with personalized meal/workout plans, progress tracking, and interactive chatbot powered by Generative AI.",
      tech: ["Next.js", "React", "Node.js", "Express", "MongoDB", "AI/LLM"],
      image: "/fitness-app-dashboard.png",
      featured: true,
    },
    {
      title: "EduConnect Pakistan",
      description:
        "A tutor booking platform with advanced filtering, reviews, session management, role-based dashboards, and secure APIs for seamless learning connections.",
      tech: ["React", "Node.js", "Express", "MongoDB", "REST API"],
      image: "/education-platform.png",
      featured: true,
    },
    {
      title: "Multilingual Dictionary Application",
      description:
        "A modular desktop application featuring real-time Arabic to Urdu/Persian translation using design patterns, SOLID principles, and three-tier architecture.",
      tech: ["Java", "SQL", "TestNG", "Design Patterns"],
      image: "/dictionary-app.jpg",
    },
    {
      title: "Course Scheduling Application",
      description:
        "Real-time course scheduler with advanced filtering, secure admin controls, and MongoDB backend for institutional course management.",
      tech: ["HTML", "CSS", "JavaScript", "EJS", "Node.js", "Express", "MongoDB"],
      image: "/scheduling-calendar.jpg",
    },
    {
      title: "AI-Powered Documentation System",
      description:
        "Intelligent workflow automation system using Streamlit and NLP techniques (BPE, Word2Vec, LSTM) for document generation and visualization.",
      tech: ["Streamlit", "PyTorch", "NLP", "BPE", "Word2Vec", "LSTM"],
      image: "/ai-documentation-system.jpg",
    },
    {
      title: "Empathetic Chatbot",
      description:
        "Emotion-aware conversational AI trained on EmpatheticDialogues dataset, capable of detecting emotions and generating context-sensitive responses.",
      tech: ["PyTorch", "Streamlit", "NLP", "EmpatheticDialogues"],
      image: "/chatbot-conversation.jpg",
    },
  ]

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative group overflow-hidden rounded-xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="text-accent font-medium text-sm mb-2">Featured Project</p>
                <h3 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">{project.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <button className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 font-medium hover:scale-105 active:scale-95 hover:shadow-lg">
                    <ExternalLink size={18} />
                    View Project
                  </button>
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 font-medium hover:scale-105 active:scale-95">
                    <Github size={18} />
                    Code
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Notable Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className={`group p-6 bg-background rounded-xl border border-border hover:border-accent hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                  inView ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${(index + featuredProjects.length) * 100}ms` }}
              >
                <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
