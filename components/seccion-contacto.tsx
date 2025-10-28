"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SeccionContacto() {
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

  const metodosContacto = [
    {
      icono: Mail,
      etiqueta: "Email",
      valor: "agustinblume@gmail.com",
      href: "mailto:agustinblume@gmail.com",
      color: "from-primary/20 to-primary/5",
    },
    {
      icono: Phone,
      etiqueta: "Teléfono",
      valor: "+54 11 6879 5783",
      href: "tel:+5491168795783",
      color: "from-accent/20 to-accent/5",
    },
    {
      icono: Github,
      etiqueta: "GitHub",
      valor: "@agustinblumenkranc",
      href: "https://github.com/agustinblumenkranc",
      color: "from-primary/15 to-primary/5",
    },
    {
      icono: Linkedin,
      etiqueta: "LinkedIn",
      valor: "Agustín Blumenkranc",
      href: "https://www.linkedin.com/in/agust%C3%ADn-blumenkranc-7b06a526a/",
      color: "from-accent/15 to-accent/5",
    },
  ]

  return (
    <section
      id="contacto"
      ref={refSeccion}
      className="relative min-h-screen bg-gradient-to-b from-background to-secondary/20 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div
            className={`mb-16 text-center transition-all duration-700 ${
              esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Trabajemos <span className="text-primary">juntos</span>
            </h2>
            <div className="mx-auto h-1 w-20 rounded-full bg-primary" />
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
              ¿Tienes un proyecto en mente? Me encantaría escuchar tus ideas y ayudarte a hacerlas realidad
            </p>
          </div>

          <div
            className={`mb-12 text-center transition-all duration-700 delay-200 ${
              esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <a href="mailto:agustinblume@gmail.com">
              <Button
                size="lg"
                className="group h-14 bg-primary px-8 text-lg font-semibold text-primary-foreground hover:bg-primary/90"
              >
                <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                Enviar un mensaje
              </Button>
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {metodosContacto.map((metodo, indice) => (
              <a
                key={indice}
                href={metodo.href}
                target={metodo.href.startsWith("http") ? "_blank" : undefined}
                rel={metodo.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`group block transition-all duration-700 ${
                  esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${(indice + 2) * 100}ms` }}
              >
                <div className="h-full rounded-xl border border-border/50 bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:bg-card/80 hover:shadow-lg hover:shadow-primary/10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`rounded-lg bg-gradient-to-br ${metodo.color} p-3 transition-transform group-hover:scale-110`}
                    >
                      <metodo.icono className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 overflow-hidden">
                      <p className="text-sm font-medium text-muted-foreground">{metodo.etiqueta}</p>
                      <p className="truncate text-base font-semibold text-foreground group-hover:text-primary">
                        {metodo.valor}
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div
            className={`mt-16 text-center transition-all duration-700 delay-500 ${
              esVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Agustín Blumenkranc. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
