"use client"

import { useEffect, useRef, useState } from "react"

export function About() {
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
      id="about"
      ref={sectionRef}
      className={`mb-16 scroll-mt-16 transition-all duration-1000 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Sobre mí"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Sobre mí</h2>
      </div>
      <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
        <p>
          Soy un desarrollador web apasionado por crear{" "}
          <span className="font-medium text-foreground">interfaces de usuario accesibles y pixel-perfect</span> que
          combinan diseño elegante con ingeniería robusta. Mi trabajo favorito se encuentra en la intersección del
          diseño y el desarrollo, creando experiencias que no solo se ven bien, sino que están meticulosamente
          construidas para el rendimiento y la usabilidad.
        </p>
        <p>
          Actualmente me especializo en <span className="font-medium text-foreground">React y Next.js</span>,
          construyendo aplicaciones web modernas con las mejores prácticas de accesibilidad y UX/UI. Me encanta trabajar
          en proyectos que tienen un impacto real en la vida de las personas.
        </p>
        <p>
          En mi tiempo libre, me gusta explorar nuevas tecnologías, contribuir a proyectos de código abierto y
          mantenerme actualizado con las últimas tendencias en desarrollo web.
        </p>
      </div>
    </section>
  )
}
