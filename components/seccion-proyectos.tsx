"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Github } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const proyectos = [
  {
    titulo: "DogDreams - App de Adopción de Mascotas",
    descripcion:
      "Plataforma web completa para conectar mascotas en adopción con familias amorosas. Incluye sistema de búsqueda avanzada, perfiles detallados de mascotas y proceso de solicitud de adopción integrado.",
    tecnologias: ["React", "Next.js", "CSS", "UX/UI"],
    enlace: "https://github.com/gaelmos/dogdreams",
    gradiente: "from-primary/20 via-accent/10 to-transparent",
  },
  {
    titulo: "ExplorAR - Reserva de Actividades Turísticas",
    descripcion:
      "Sistema de reservas para actividades turísticas y gastronómicas en Argentina. Gestión de disponibilidad en tiempo real, sistema de pagos integrado y panel de administración completo.",
    tecnologias: ["Next.js", "React", "HTML", "Testing"],
    enlace: "https://github.com/agustinblumenkranc/ExplorAR-Front",
    gradiente: "from-accent/20 via-primary/10 to-transparent",
  },
]

export function SeccionProyectos() {
  const [esVisible, setEsVisible] = useState(false)
  const refSeccion = useRef<HTMLElement>(null)

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          setEsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (refSeccion.current) {
      observador.observe(refSeccion.current)
    }

    return () => observador.disconnect()
  }, [])

  return (
    <section id="proyectos" ref={refSeccion} className="relative min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Mis <span className="text-primary">Proyectos</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              Algunos de los proyectos en los que he trabajado, aplicando las mejores prácticas de desarrollo web
            </p>
          </div>

          <div className="space-y-8">
            {proyectos.map((proyecto, indice) => (
              <div
                key={indice}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-700 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 ${
                  esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${indice * 200}ms` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${proyecto.gradiente} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative p-8 md:p-10">
                  <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                    <div className="flex-1 space-y-4">
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-balance text-2xl font-bold transition-colors group-hover:text-primary md:text-3xl">
                          {proyecto.titulo}
                        </h3>
                        <a
                          href={proyecto.enlace}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 rounded-full bg-primary/10 p-2 transition-all duration-300 hover:bg-primary hover:text-primary-foreground group-hover:scale-110"
                          aria-label={`Ver repositorio de ${proyecto.titulo}`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </div>

                      <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
                        {proyecto.descripcion}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {proyecto.tecnologias.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="rounded-full bg-secondary/50 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-primary/20 hover:text-primary"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <a
                      href={proyecto.enlace}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
                    >
                      Ver repositorio
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
