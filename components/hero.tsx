"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

interface HeroProps {
  activeSection: string
}

export function Hero({ activeSection }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
      <div
        className={`transition-all duration-1000 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          <span className="text-balance">Agustín Blumenkranc</span>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight text-primary sm:text-xl">Desarrollador Web Frontend</h2>
        <p className="mt-4 max-w-xs text-pretty leading-relaxed text-muted-foreground">
          Construyo experiencias web accesibles y pixel-perfect que combinan diseño elegante con ingeniería robusta.
        </p>

        <nav className="nav hidden lg:block" aria-label="In-page jump links">
          <ul className="mt-16 w-max space-y-2">
            {["about", "experience", "projects", "contact"].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className="group flex items-center py-3 transition-all hover:translate-x-2"
                >
                  <span
                    className={`mr-4 h-px transition-all ${
                      activeSection === section
                        ? "w-16 bg-primary"
                        : "w-8 bg-muted-foreground group-hover:w-16 group-hover:bg-foreground"
                    }`}
                  />
                  <span
                    className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                      activeSection === section
                        ? "text-foreground"
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}
                  >
                    {section === "about"
                      ? "Sobre mí"
                      : section === "experience"
                        ? "Experiencia"
                        : section === "projects"
                          ? "Proyectos"
                          : "Contacto"}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      <ul
        className={`ml-1 mt-8 flex items-center gap-5 transition-all duration-1000 delay-300 lg:mt-0 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
        aria-label="Social media"
      >
        <li>
          <a
            href="https://github.com/agustinblumenkranc"
            target="_blank"
            rel="noreferrer"
            className="block transition-transform hover:scale-110 hover:text-primary"
          >
            <span className="sr-only">GitHub</span>
            <Github className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/agust%C3%ADn-blumenkranc-7b06a526a/"
            target="_blank"
            rel="noreferrer"
            className="block transition-transform hover:scale-110 hover:text-primary"
          >
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="mailto:agustinblume@gmail.com"
            className="block transition-transform hover:scale-110 hover:text-primary"
          >
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </li>
      </ul>
    </header>
  )
}
