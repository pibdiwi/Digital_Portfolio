"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const navItems = [
  { id: "about", label: "About" },
  { id: "resume", label: "Resume" },
  { id: "internship", label: "Internship" },
  { id: "academic", label: "Academic Work" },
  { id: "reflections", label: "Reflections" },
]

export function Navigation() {
  const [activeSection, setActiveSection] = useState("about")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 150

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={cn(
        "fixed left-0 top-0 z-50 hidden h-screen w-64 flex-col justify-center border-r border-primary/20 bg-background/80 px-8 backdrop-blur-xl transition-all duration-500 lg:flex",
        isScrolled && "bg-background/95 border-primary/30"
      )}
    >
      <div className="space-y-1">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "group flex w-full items-center gap-4 py-3 text-left text-sm uppercase tracking-widest transition-all duration-300",
              activeSection === item.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            <span
              className={cn(
                "h-px bg-current transition-all duration-300",
                activeSection === item.id ? "w-16" : "w-8 group-hover:w-12"
              )}
            />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  )
}

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-card/80 backdrop-blur-xl transition-all hover:bg-card lg:hidden"
        aria-label="Toggle menu"
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-300",
              isOpen && "translate-y-2 rotate-45"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-300",
              isOpen && "opacity-0"
            )}
          />
          <span
            className={cn(
              "h-0.5 w-6 bg-foreground transition-all duration-300",
              isOpen && "-translate-y-2 -rotate-45"
            )}
          />
        </div>
      </button>

      <div
        className={cn(
          "fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-500 lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <div className="flex h-full flex-col items-center justify-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-2xl font-light uppercase tracking-widest text-foreground transition-all duration-300 hover:text-primary"
              style={{
                transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                transform: isOpen ? "translateY(0)" : "translateY(20px)",
                opacity: isOpen ? 1 : 0,
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </>
  )
}
