"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Sparkles } from "lucide-react"

export function SeccionHero() {
  const irAProyectos = () => {
    document.getElementById("proyectos")?.scrollIntoView({ behavior: "smooth" })
  }

  const irAContacto = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/4 top-1/4 h-64 w-64 animate-float rounded-full bg-primary/30 blur-3xl" />
        <div
          className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-3xl"
          style={{ animation: "float 8s ease-in-out infinite" }}
        />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <div className="space-y-4 animate-fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              Disponible para proyectos
            </div>
            <h1 className="text-balance text-5xl font-bold tracking-tight md:text-7xl">
              Hola, soy{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Agustín Blumenkranc
              </span>
            </h1>
            <p className="text-balance text-2xl font-semibold text-foreground/90 md:text-3xl">
              Desarrollador Web Frontend
            </p>
          </div>

          <p
            className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl"
            style={{ animationDelay: "0.2s" }}
          >
            Especializado en crear experiencias web modernas y accesibles con React y Next.js. Transformo ideas en
            aplicaciones funcionales y visualmente atractivas.
          </p>

          <div className="flex flex-wrap justify-center gap-4" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={irAProyectos}
              className="group bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Ver mis proyectos
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={irAContacto}
              className="border-primary/50 bg-transparent hover:bg-primary/10"
            >
              Contactar
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-primary/50 p-2">
              <div className="h-3 w-1 animate-pulse rounded-full bg-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
