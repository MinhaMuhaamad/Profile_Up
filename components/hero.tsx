"use client"

import { useEffect, useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Grey background (left side) */}
      <div className="absolute inset-0 bg-gray-100 -z-20"></div>

      {/* Black background (right side) with diagonal cut */}
      <div className="absolute inset-0 -z-20">
        <div
          className="absolute inset-0 bg-black"
          style={{
            clipPath: "polygon(55% 0%, 100% 0%, 100% 100%, 30% 100%)",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* Left Content - on grey background */}
        <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"} z-10`}>
          <div className="space-y-4 mb-8">
            <p className={`text-primary font-medium text-lg ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.1s' }}>Hello, I'm</p>
            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-black text-balance ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.2s' }}>Minha</h1>
            <p className={`text-xl sm:text-2xl text-gray-600 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.3s' }}>Software Engineer</p>
          </div>

          <p className={`text-lg text-gray-600 leading-relaxed mb-8 max-w-lg text-balance ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.4s' }}>
            Passionate Software Engineering student skilled in Agile development, UML modeling, and full-stack
            development with React, Next.js, and Node.js. Experienced in building AI-driven solutions and scalable
            applications.
          </p>

          <div className={`flex flex-wrap gap-4 mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.5s' }}>
            <a
              href="#contact"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all duration-300 font-medium hover:shadow-lg hover:scale-105 active:scale-95"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white rounded-full transition-all duration-300 font-medium hover:scale-105 active:scale-95"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className={`flex items-center gap-6 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-sm text-gray-600">Follow me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-300 text-black hover:bg-black hover:text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-300 text-black hover:bg-black hover:text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:minhaghulammuhammad@gmail.com"
                className="p-3 bg-gray-300 text-black hover:bg-black hover:text-white rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image - on black background */}
        <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"} flex justify-center z-10 transition-all duration-700 ease-out`}>
          <div className="relative w-full max-w-md group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-500/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden aspect-square flex items-center justify-center border-2 border-gray-800 group-hover:border-gray-700 transition-all duration-500">
              <img 
                src="/gemini2.png" 
                alt="Profile" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes("gemini1.png")) {
                    target.src = "/gemini1.png";
                  } else if (!target.src.includes("professional-portrait.png")) {
                    target.src = "/professional-portrait.png";
                  }
                }}
              />
            </div>
            <p className="text-white/70 text-xs sm:text-sm mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              This is not my photo, but I dearly hope to get one just like this
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
