"use client"

import { useInView } from "react-intersection-observer"

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "HTML5", icon: "🔶" },
        { name: "CSS3", icon: "🔷" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "JavaScript", icon: "⚡" },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🍃" },
        { name: "SQL", icon: "🗄️" },
        { name: "RESTful APIs", icon: "🔌" },
      ],
    },
    {
      category: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "TypeScript", icon: "📘" },
        { name: "Figma", icon: "🎨" },
        { name: "Bootstrap", icon: "📦" },
        { name: "SASS", icon: "🎭" },
      ],
    },
    {
      category: "Specializations",
      skills: [
        { name: "Full-Stack MERN", icon: "🚀" },
        { name: "Next.js Development", icon: "🎯" },
        { name: "Generative AI", icon: "🤖" },
        { name: "LLM Integration", icon: "🧠" },
      ],
    },
  ]

  return (
    <section id="skills" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl sm:text-5xl font-bold text-foreground mb-4 ${
              inView ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Comprehensive toolkit of technologies and frameworks I use to build scalable, high-performance applications
          </p>
          <div className="w-20 h-1 bg-accent mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`h-full ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="h-full p-8 bg-gradient-to-br from-background via-background to-accent/5 rounded-2xl border border-border hover:border-accent hover:shadow-xl transition-all duration-500 group hover:scale-[1.02]">
                {/* Category Title */}
                <h3 className="text-lg font-semibold text-foreground mb-6 pb-4 border-b border-accent/30 group-hover:text-accent transition-colors duration-300">
                  {category.category}
                </h3>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 hover:bg-accent/10 transition-all duration-300 group/skill cursor-pointer hover:translate-x-1"
                    >
                      {/* Skill Icon */}
                      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center text-lg group-hover/skill:bg-accent/30 group-hover/skill:scale-110 transition-all duration-200">
                        {skill.icon}
                      </div>
                      {/* Skill Name */}
                      <span className="text-sm font-medium text-foreground group-hover/skill:text-accent transition-colors duration-200">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Full-Stack Development",
              description: "Proficient in building complete web applications from frontend to backend",
            },
            {
              title: "AI & Automation",
              description: "Experienced with Generative AI, LLMs, and intelligent automation solutions",
            },
            {
              title: "Software Architecture",
              description: "Knowledge of design patterns, SOLID principles, and scalable system design",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl bg-background border border-border hover:border-accent/50 hover:shadow-lg transition-all group ${
                inView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              <h4 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {item.title}
              </h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
