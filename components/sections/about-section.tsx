"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  return (
    <section
      id="about"
      ref={ref}
      className="relative min-h-screen px-6 py-24 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={cn(
            "transition-all duration-1000",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-medium">
            About Me
          </p>
          <h2 className="mb-12 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Hello, I&apos;m <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Joseph Villamin</span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-5">
          <div
            className={cn(
              "space-y-6 lg:col-span-3 transition-all duration-1000 delay-200",
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              Information Systems Student, Mobile Developer
              I&apos;m a graduating student with a passion
              for learning and a commitment to excellence in everything I do. My
              academic journey has equipped me with both theoretical knowledge and
              practical skills that I&apos;m eager to apply in the professional world.
            </p>
          </div>

          <div
            className={cn(
              "space-y-8 lg:col-span-2 transition-all duration-1000 delay-400",
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <div>
              <h3 className="mb-4 text-sm uppercase tracking-widest font-medium text-primary">
                Education
              </h3>
              <p className="text-muted-foreground">Bachelor of Science in Information Systems</p>
              <p className="text-muted-foreground">De La Salle - College of Saint Benilde</p>
            </div>

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-widest font-medium text-primary">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Technology", "Analysis", "Innovation"].map(
                  (interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-sm text-primary font-medium transition-all hover:bg-primary/20 hover:border-primary"
                    >
                      {interest}
                    </span>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-sm uppercase tracking-widest font-medium text-primary">
                Languages
              </h3>
              <p className="text-muted-foreground">English (Fluent)</p>
              <p className="text-muted-foreground">Filipino (Native)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
