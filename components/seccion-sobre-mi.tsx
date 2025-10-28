"use client"

import { useEffect, useRef, useState } from "react"
import { Code2, Palette, Zap } from "lucide-react"
import Image from "next/image"

export function SeccionSobreMi() {
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

  const destacados = [
    {
      icono: Code2,
      titulo: "Desarrollo Frontend",
      descripcion: "Experto en React, Next.js y tecnologías web modernas",
    },
    {
      icono: Palette,
      titulo: "UX/UI Design",
      descripcion: "Diseño interfaces intuitivas y accesibles para todos",
    },
    {
      icono: Zap,
      titulo: "Performance",
      descripcion: "Optimización y mejores prácticas en cada proyecto",
    },
  ]

  return (
    <section id="sobre-mi" ref={refSeccion} className="relative min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Sobre <span className="text-primary">mí</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
          </div>

          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div
              className={`space-y-6 transition-all duration-700 delay-200 ${
                esVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              <div className="relative mx-auto mb-8 h-48 w-48 overflow-hidden rounded-2xl border-4 border-primary/20 shadow-xl shadow-primary/20 lg:mb-0">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/KSOOB22ENFE7TG5ZGQRWZHTRZE-1m9Cujv5G2gMc8jvswjTXFQK2Xp93i.avif"
                  alt="Agustín Blumenkranc"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <p className="text-pretty text-lg leading-relaxed text-foreground/90">
                Soy un desarrollador web apasionado por crear experiencias digitales que combinan funcionalidad,
                estética y accesibilidad. Mi enfoque está en construir aplicaciones web modernas que no solo se vean
                bien, sino que también ofrezcan un rendimiento excepcional.
              </p>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Con experiencia en React y Next.js, me especializo en transformar diseños complejos en código limpio y
                mantenible. Cada proyecto es una oportunidad para aprender nuevas tecnologías y mejorar mis habilidades
                como desarrollador.
              </p>
              <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                Además del desarrollo, tengo conocimientos sólidos en testing, principios de UX/UI y accesibilidad web,
                asegurando que cada aplicación sea inclusiva y fácil de usar para todos.
              </p>
            </div>

            <div
              className={`space-y-6 transition-all duration-700 delay-400 ${
                esVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
              }`}
            >
              {destacados.map((item, indice) => (
                <div
                  key={indice}
                  className="group rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-primary/10 p-3 transition-colors group-hover:bg-primary/20">
                      <item.icono className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-2 text-xl font-semibold">{item.titulo}</h3>
                      <p className="text-pretty text-muted-foreground">{item.descripcion}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
