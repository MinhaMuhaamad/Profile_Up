"use client"

import { useEffect, useState } from "react"
import { Mail, Github, Linkedin } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grey background (left side) - exactly 50% */}
      <div className="absolute inset-0 bg-gray-100 -z-20 w-1/2"></div>

      {/* Black background (right side) - exactly 50% */}
      <div className="absolute inset-0 bg-black -z-20 left-1/2 w-1/2"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-0 items-center min-h-screen">
        {/* Left Content - on grey background */}
        <div className={`${isVisible ? "animate-slide-in-left" : "opacity-0"} z-10 transition-all duration-700 ease-out flex flex-col justify-center min-h-screen px-8 sm:px-12 lg:px-16 xl:px-20`}>
          {/* Main Text Content - Vertically Centered */}
          <div className="space-y-3 sm:space-y-4 mb-12 sm:mb-16">
            <p className="text-black font-medium text-2xl sm:text-3xl lg:text-4xl xl:text-5xl transition-all duration-700 delay-100">Hello, I'm</p>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-bold text-black leading-[1.1] transition-all duration-700 delay-200">Minha</h1>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-600 font-normal transition-all duration-700 delay-300">Software Engineer</p>
          </div>

          {/* Social Links - Square buttons with rounded corners */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="mailto:minhaghulammuhammad@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 hover:bg-gray-300 text-black rounded-lg flex items-center justify-center transition-all shadow-sm"
            >
              <Mail size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 hover:bg-gray-300 text-black rounded-lg flex items-center justify-center transition-all shadow-sm"
            >
              <Github size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gray-200 hover:bg-gray-300 text-black rounded-lg flex items-center justify-center transition-all shadow-sm"
            >
              <Linkedin size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </a>
          </div>
        </div>

        {/* Right Image - on black background */}
        <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"} relative flex justify-center items-center z-10 transition-all duration-700 min-h-screen px-8 sm:px-12 lg:px-16 xl:px-20`}>
          <div className="relative w-full max-w-md xl:max-w-lg flex flex-col items-center justify-center">
            <div className="relative overflow-hidden flex items-center justify-center">
              <img 
                src="/gemini1.png" 
                alt="Profile" 
                className="w-full h-auto max-h-[85vh] object-contain"
                onError={(e) => {
                  // Fallback to professional-portrait.png if gemini1.png doesn't exist
                  const target = e.target as HTMLImageElement;
                  if (!target.src.includes("professional-portrait.png")) {
                    target.src = "/professional-portrait.png";
                  } else if (!target.src.includes("placeholder-user.jpg")) {
                    target.src = "/placeholder-user.jpg";
                  }
                }}
              />
            </div>
          </div>
          {/* Disclaimer text - bottom right of the black section */}
          <p className="absolute bottom-8 right-8 sm:right-12 lg:right-16 xl:right-20 text-white/70 text-xs sm:text-sm">
            This is not my photo, but I dearly hope to get one just like this
          </p>
        </div>
      </div>
    </section>
  )
}
