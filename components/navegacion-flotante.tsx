"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"

interface PropNavegacion {
  seccionActiva: string
}

export function NavegacionFlotante({ seccionActiva }: PropNavegacion) {
  const secciones = [
    { id: "hero", etiqueta: "Inicio" },
    { id: "sobre-mi", etiqueta: "Sobre mí" },
    { id: "habilidades", etiqueta: "Habilidades" },
    { id: "proyectos", etiqueta: "Proyectos" },
    { id: "contacto", etiqueta: "Contacto" },
  ]

  const irASeccion = (id: string) => {
    const elemento = document.getElementById(id)
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      <nav className="fixed left-1/2 top-8 z-50 -translate-x-1/2 transform">
        <div className="flex items-center gap-1 rounded-full border border-border/50 bg-card/80 px-2 py-2 backdrop-blur-lg">
          {secciones.map((seccion) => (
            <button
              key={seccion.id}
              onClick={() => irASeccion(seccion.id)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                seccionActiva === seccion.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {seccion.etiqueta}
            </button>
          ))}
        </div>
      </nav>

      <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3">
        <a
          href="https://github.com/agustinblumenkranc"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/agust%C3%ADn-blumenkranc-7b06a526a/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="mailto:agustinblume@gmail.com"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="tel:+5491168795783"
          className="group flex h-12 w-12 items-center justify-center rounded-full border border-border/50 bg-card/80 backdrop-blur-lg transition-all duration-300 hover:scale-110 hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Phone className="h-5 w-5" />
        </a>
      </div>
    </>
  )
}
