"use client"

export function Navigation() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/80 backdrop-blur lg:hidden">
      <ul className="flex justify-around py-4">
        {["about", "experience", "projects", "contact"].map((section) => (
          <li key={section}>
            <a
              href={`#${section}`}
              className="text-xs font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-primary"
            >
              {section === "about"
                ? "Sobre mí"
                : section === "experience"
                  ? "Experiencia"
                  : section === "projects"
                    ? "Proyectos"
                    : "Contacto"}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
