"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { ExternalLink, Calendar, Building2 } from "lucide-react"
import Image from "next/image"
import { ImageCarousel } from "@/components/image-carousel"

const internshipProjects = [
  {
    title: "Archiving of old company files from CDs to dedicated Hard Drives",
    description:
      "Organized and archived important old company files from CDs to a dedicated Hard Drive for ease of access and orderliness.",
    image: "/Task3.png?height=300&width=500",
    tags: ["Archive", "Transferring", "Security"],
  },
  {
    title: "Documentation of Tasks",
    description:
      "Created documentations for tickets and tasks delegated for easier understanding for future users.",
    image: "/Task2.png?height=300&width=500",
    tags: ["Documentation", "Communication", "Reporting"],
  },
  {
    title: "Research & Presentation",
    description:
      "Researched industry best practices and presented findings to the team, contributing to process improvement initiatives.",
    image: "/Task1.png?height=300&width=500",
    tags: ["Research", "Presentation", "Analysis"],
  },
]

// OJT Experience images - Replace with your actual images
const ojtImages = [
  "/1.jpg?height=600&width=800",
  "/2.jpgheight=600&width=800",
  "/3.jpg?height=600&width=800",
  "/4.jpg?height=600&width=800",
  "/5.jpg?height=600&width=800",
]

export function InternshipSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section
      id="internship"
      ref={ref}
      className="relative min-h-screen bg-card/20 px-6 py-24 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-5xl">
        <div
          className={cn(
            "mb-16 transition-all duration-1000",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-medium">
            Internship Learning
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Professional Experience
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            During my virtual internship, I had the opportunity to work on various 
            projects that enhanced my professional skills and provided valuable 
            industry experience.
          </p>
        </div>

        {/* Internship Details Card */}
        <div
          className={cn(
            "mb-16 rounded-2xl border border-primary/30 bg-primary/10 p-6 backdrop-blur-sm transition-all duration-1000 delay-200 hover:border-primary/50 hover:bg-primary/15",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">
                Virtual Internship Program
              </h3>
              <div className="mt-2 flex flex-wrap gap-4 text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Company Name
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  June 2024 — August 2024
                </span>
              </div>
            </div>
            <a
              href="#"
              className="flex items-center gap-2 text-sm text-primary transition-colors hover:text-primary/80"
            >
              View Certificate
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* OJT Experience Image Carousel */}
        <div
          className={cn(
            "mb-16 transition-all duration-1000 delay-300",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="mb-6">
            <h3 className="mb-2 text-2xl font-bold text-foreground">
              OJT Experience Gallery
            </h3>
            <p className="text-muted-foreground">
              Moments and highlights from my on-the-job training journey
            </p>
          </div>
          <ImageCarousel images={ojtImages} autoPlay={true} autoPlayInterval={4000} />
        </div>

        {/* Projects Grid */}
        <div
          className={cn(
            "transition-all duration-1000 delay-400",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h3 className="mb-8 text-2xl font-bold text-foreground">Projects & Tasks</h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internshipProjects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                "group rounded-2xl border border-border bg-card/30 overflow-hidden transition-all duration-1000 hover:border-primary/50 hover:bg-card/50",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <div className="p-6">
                <h4 className="mb-2 text-lg font-semibold text-foreground">
                  {project.title}
                </h4>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/30 bg-primary/10 px-2 py-1 text-xs text-primary font-medium transition-all hover:bg-primary/20 hover:border-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}
