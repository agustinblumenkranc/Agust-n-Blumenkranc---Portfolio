"use client"

import { useEffect, useState } from "react"
import { LuzCursor } from "@/components/luz-cursor"
import { SeccionHero } from "@/components/seccion-hero"
import { SeccionSobreMi } from "@/components/seccion-sobre-mi"
import { SeccionHabilidades } from "@/components/seccion-habilidades"
import { SeccionProyectos } from "@/components/seccion-proyectos"
import { SeccionContacto } from "@/components/seccion-contacto"
import { NavegacionFlotante } from "@/components/navegacion-flotante"

export default function Inicio() {
  const [seccionActiva, setSeccionActiva] = useState("hero")

  useEffect(() => {
    const manejarScroll = () => {
      const secciones = ["hero", "sobre-mi", "habilidades", "proyectos", "contacto"]
      const posicionScroll = window.scrollY + window.innerHeight / 2

      for (const seccion of secciones) {
        const elemento = document.getElementById(seccion)
        if (elemento) {
          const { offsetTop, offsetHeight } = elemento
          if (posicionScroll >= offsetTop && posicionScroll < offsetTop + offsetHeight) {
            setSeccionActiva(seccion)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", manejarScroll)
    manejarScroll()
    return () => window.removeEventListener("scroll", manejarScroll)
  }, [])

  return (
    <div className="relative min-h-screen bg-background">
      <LuzCursor />
      <NavegacionFlotante seccionActiva={seccionActiva} />
      <SeccionHero />
      <SeccionSobreMi />
      <SeccionHabilidades />
      <SeccionProyectos />
      <SeccionContacto />
    </div>
  )
}
