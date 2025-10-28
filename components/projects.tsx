"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "App de Adopción de Mascotas",
    description:
      "Plataforma web completa para conectar mascotas en adopción con familias amorosas. Incluye sistema de búsqueda avanzada, perfiles detallados y proceso de solicitud integrado.",
    technologies: ["React", "Next.js", "CSS"],
    link: "https://github.com/gaelmos/dogdreams",
  },
  {
    title: "Reserva de Actividades Turísticas",
    description:
      "Sistema de reservas para actividades turísticas y gastronómicas en Argentina. Gestión de disponibilidad en tiempo real, pagos integrados y panel de administración.",
    technologies: ["Next.js", "React", "HTML"],
    link: "https://github.com/agustinblumenkranc/ExplorAR-Front",
  },
]

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`mb-16 scroll-mt-16 transition-all duration-1000 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Proyectos"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Proyectos</h2>
      </div>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <Card
            key={project.title}
            className={`group relative overflow-hidden border-border bg-card/50 p-6 backdrop-blur transition-all duration-700 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <a href={project.link} target="_blank" rel="noreferrer" className="block">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{project.title}</h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="rounded-full px-3 py-1 text-xs font-medium">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </section>
  )
}
