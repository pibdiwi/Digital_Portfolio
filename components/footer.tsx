"use client"

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-primary/20 bg-primary/5 px-6 py-16 lg:ml-64 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="mb-2 text-lg font-semibold text-foreground">Joseph Villamin</h3>
            <p className="text-sm text-muted-foreground">
              Aspiring professional ready to make an impact.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="mailto:pavedwt@gmail.com"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-muted-foreground transition-all hover:text-primary hover:border-primary hover:bg-primary/20"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/joseph-emmanuel-villamin-28b0073a8/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-muted-foreground transition-all hover:text-primary hover:border-primary hover:bg-primary/20"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/pibdiwi"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-muted-foreground transition-all hover:text-primary hover:border-primary hover:bg-primary/20"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary/20 pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Joseph Villamin. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            Back to top
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
