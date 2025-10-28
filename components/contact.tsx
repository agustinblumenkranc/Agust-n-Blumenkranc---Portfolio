"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
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
      id="contact"
      ref={sectionRef}
      className={`mb-16 scroll-mt-16 transition-all duration-1000 md:mb-24 lg:mb-36 lg:scroll-mt-24 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
      aria-label="Contacto"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground lg:sr-only">Contacto</h2>
      </div>
      <div className="space-y-6">
        <p className="text-pretty leading-relaxed text-muted-foreground">
          ¿Tienes un proyecto en mente o simplemente quieres charlar? No dudes en contactarme. Siempre estoy abierto a
          nuevas oportunidades y colaboraciones.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button asChild className="group gap-2 transition-all hover:scale-105" size="lg">
            <a href="mailto:agustinblume@gmail.com">
              <Mail className="h-4 w-4 transition-transform group-hover:rotate-12" />
              agustinblume@gmail.com
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="group gap-2 transition-all hover:scale-105 bg-transparent"
            size="lg"
          >
            <a href="tel:+5491168795783">
              <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
              +54 11 6879 5783
            </a>
          </Button>
        </div>
      </div>
      <footer className="mt-16 text-sm text-muted-foreground">
        <p>
          Diseñado y construido con <span className="text-primary">React</span> y{" "}
          <span className="text-primary">Next.js</span>
        </p>
      </footer>
    </section>
  )
}
