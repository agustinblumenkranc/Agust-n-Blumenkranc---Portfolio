"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Wrench, TestTube } from "lucide-react"

export function SeccionHabilidades() {
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

  const categorias = [
    {
      icono: Code,
      titulo: "Frontend",
      habilidades: ["React", "Next.js", "HTML", "CSS"],
      color: "from-primary/20 to-primary/5",
    },
    {
      icono: Wrench,
      titulo: "Herramientas",
      habilidades: ["Git", "Figma", "VS Code"],
      color: "from-accent/20 to-accent/5",
    },
    {
      icono: TestTube,
      titulo: "Conocimientos",
      habilidades: ["Testing", "UX/UI", "Accesibilidad"],
      color: "from-primary/15 to-primary/5",
    },
  ]

  return (
    <section
      id="habilidades"
      ref={refSeccion}
      className="relative min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Mis <span className="text-primary">Habilidades</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {categorias.map((categoria, indice) => (
              <div
                key={indice}
                className={`transition-all duration-700 ${
                  esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${indice * 150}ms` }}
              >
                <div className="group h-full rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10">
                  <div className={`mb-6 inline-flex rounded-xl bg-gradient-to-br ${categoria.color} p-4`}>
                    <categoria.icono className="h-8 w-8 text-primary" />
                  </div>

                  <h3 className="mb-6 text-2xl font-bold">{categoria.titulo}</h3>

                  <div className="space-y-3">
                    {categoria.habilidades.map((habilidad, indiceHabilidad) => (
                      <div
                        key={indiceHabilidad}
                        className="flex items-center gap-3 rounded-lg bg-background/50 px-4 py-3 transition-all duration-300 hover:bg-primary/10"
                      >
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <span className="font-medium">{habilidad}</span>
                      </div>
                    ))}
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
