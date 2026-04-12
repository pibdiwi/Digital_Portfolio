"use client"

import { useEffect, useRef } from "react"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef(0)
  const mouseY = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { left, top, width, height } = container.getBoundingClientRect()
      mouseX.current = (clientX - left - width / 2) / 30
      mouseY.current = (clientY - top - height / 2) / 30

      container.style.setProperty("--mouse-x", `${mouseX.current}px`)
      container.style.setProperty("--mouse-y", `${mouseY.current}px`)
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(104,211,145,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(104,211,145,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Floating orbs - primary accent */}
      <div
        className="absolute -left-40 top-20 h-64 w-64 rounded-full opacity-40 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.68 0.15 50) 0%, transparent 70%)",
          transform: "translate(var(--mouse-x, 0), var(--mouse-y, 0))",
          transition: "transform 0.4s ease-out",
        }}
      />
      
      {/* Floating orbs - accent */}
      <div
        className="absolute -right-40 bottom-20 h-80 w-80 rounded-full opacity-30 blur-3xl"
        style={{
          background: "radial-gradient(circle, oklch(0.72 0.18 170) 0%, transparent 70%)",
          transform: "translate(calc(var(--mouse-x, 0) * -0.5), calc(var(--mouse-y, 0) * -0.5))",
          transition: "transform 0.4s ease-out",
        }}
      />

      <div className="relative z-10 px-6 text-center lg:px-8">
        <div className="animate-fade-in-up">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Welcome to my portfolio
          </p>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Joseph Villamin
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Aspiring professional with passion in innovating, continuous learning, 
            and making a meaningful impact in all work I do.
          </p>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6 animate-fade-in-up [animation-delay:200ms]">
          <a
            href="mailto:pavedwt@gmail.com"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20"
            aria-label="Email"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary relative z-10" />
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-emmanuel-villamin-28b0073a8/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:bg-accent/20 hover:shadow-lg hover:shadow-accent/20"
            aria-label="LinkedIn"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <Linkedin className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent relative z-10" />
          </a>
          <a
            href="https://github.com/pibdiwi/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20"
            aria-label="GitHub"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg" />
            <Github className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary relative z-10" />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="mt-20 animate-bounce text-muted-foreground transition-colors hover:text-primary"
          aria-label="Scroll down"
        >
          <ArrowDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}
