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
            <p className="text-primary font-medium text-lg">Hello, I'm</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black text-balance">Minha</h1>
            <p className="text-xl sm:text-2xl text-gray-600">Software Engineer</p>
          </div>

          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg text-balance">
            Passionate Software Engineering student skilled in Agile development, UML modeling, and full-stack
            development with React, Next.js, and Node.js. Experienced in building AI-driven solutions and scalable
            applications.
          </p>

          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition-all font-medium hover:shadow-lg"
            >
              Let's Connect
            </a>
            <a
              href="#projects"
              className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white rounded-full transition-all font-medium"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <p className="text-sm text-gray-600">Follow me</p>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-300 text-black hover:bg-black hover:text-white rounded-full transition-all"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-300 text-black hover:bg-black hover:text-white rounded-full transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:minhaghulammuhammad@gmail.com"
                className="p-3 bg-gray-300 text-black hover:bg-black hover:text-white rounded-full transition-all"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Right Image - on black background */}
        <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"} flex justify-center z-10`}>
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-gray-500/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-gray-900 rounded-3xl overflow-hidden aspect-square flex items-center justify-center border-2 border-gray-800">
              <div className="text-center space-y-4">
                <img src="/professional-portrait.png" alt="Profile" className="w-full h-full object-cover" />
                <p className="text-white text-sm px-4">
                  This is not my photo, but I dearly hope to get one just like this
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
