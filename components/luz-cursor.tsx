"use client"

import { useEffect, useState } from "react"

export function LuzCursor() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 })
  const [esVisible, setEsVisible] = useState(false)

  useEffect(() => {
    const manejarMovimiento = (e: MouseEvent) => {
      setPosicion({ x: e.clientX, y: e.clientY })
      if (!esVisible) setEsVisible(true)
    }

    const manejarSalida = () => {
      setEsVisible(false)
    }

    window.addEventListener("mousemove", manejarMovimiento)
    document.body.addEventListener("mouseleave", manejarSalida)

    return () => {
      window.removeEventListener("mousemove", manejarMovimiento)
      document.body.removeEventListener("mouseleave", manejarSalida)
    }
  }, [esVisible])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: esVisible ? 1 : 0,
        background: `radial-gradient(600px at ${posicion.x}px ${posicion.y}px, rgba(255, 150, 50, 0.12), transparent 80%)`,
      }}
    />
  )
}
