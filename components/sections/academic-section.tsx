"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ExternalLink, Users, User } from "lucide-react"
import Image from "next/image"

const individualWorks = [
  {
    title: "Elevating Budget Hotels: Integrated Web and Mobile solutions for Guest and Operational Management",
    description:
      "A comprehensive research project exploring innovative solutions in my field of study, demonstrating critical thinking and analytical skills.",
    image: "/ezStay.png?height=400&width=600",
    link: "https://github.com/pibdiwi/ezStay",
    tags: ["Research", "Analysis", "Innovation"],
  },
  {
    title: "Case Study Analysis",
    description:
      "In-depth analysis of a real-world business scenario, providing recommendations based on thorough research and data interpretation.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Case Study", "Business", "Strategy"],
  },
  {
    title: "Website Design Project",
    description:
      "Designed and developed a functional website prototype showcasing user-centered design principles and modern web technologies.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    tags: ["Design", "Web Development", "UI/UX"],
  },
]

const groupWorks = [
  {
    title: "Team Research Project",
    description:
      "Collaborated with a team of 5 to conduct research and present findings on emerging industry trends.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    team: ["Member 1", "Member 2", "Member 3", "Member 4"],
    tags: ["Teamwork", "Research", "Presentation"],
  },
  {
    title: "Group Presentation",
    description:
      "Led a team presentation on strategic management concepts, receiving recognition for clarity and engagement.",
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    team: ["Member 1", "Member 2", "Member 3"],
    tags: ["Leadership", "Communication", "Strategy"],
  },
]

export function AcademicSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="academic"
      ref={ref}
      className="relative min-h-screen px-6 py-24 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={cn(
            "mb-16 transition-all duration-1000",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Exemplary Academic Work
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My Best Work
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            A collection of my best academic projects, showcasing both individual 
            excellence and collaborative achievements throughout my academic journey.
          </p>
        </div>

        {/* Individual Work */}
        <div className="mb-20">
          <div
            className={cn(
              "mb-8 flex items-center gap-3 transition-all duration-1000 delay-200",
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <User className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Individual Work</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {individualWorks.map((work, index) => (
              <a
                key={work.title}
                href={work.link}
                className={cn(
                  "group block rounded-2xl border border-border bg-card/30 overflow-hidden transition-all duration-1000 hover:border-primary/50 hover:bg-card/50",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-white">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-sm font-medium text-primary">
                      View Project <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h4>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                    {work.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Group Work */}
        <div>
          <div
            className={cn(
              "mb-8 flex items-center gap-3 transition-all duration-1000 delay-500",
              isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            )}
          >
            <Users className="h-5 w-5 text-primary" />
            <h3 className="text-xl font-semibold text-foreground">Group Work</h3>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {groupWorks.map((work, index) => (
              <a
                key={work.title}
                href={work.link}
                className={cn(
                  "group block rounded-2xl border border-border bg-card/30 overflow-hidden transition-all duration-1000 hover:border-primary/50 hover:bg-card/50",
                  isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                )}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-background/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="flex items-center gap-2 text-sm font-medium text-primary">
                      View Project <ExternalLink className="h-4 w-4" />
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {work.title}
                  </h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {work.description}
                  </p>
                  <div className="mb-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3 w-3" />
                    <span>Team: {work.team.join(", ")}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {work.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-border bg-secondary/50 px-2 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
