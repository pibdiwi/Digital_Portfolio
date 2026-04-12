"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { Download, Printer, Mail, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const experiences = [
  {
    title: "IT Intern - Platform and Security Department",
    company: "eData Services",
    period: "February 2026 — April 2026",
    description:
      "Completed assigned tasks related to Security and Servers. Handled several tickets as well as archiving important company files.",
  },
]

const education = [
  {
    degree: "Bachelor of Science in Information Systems",
    school: "De La Salle - College of Saint Benilde",
    period: "2021 — 2026"
  },
  {
    degree: "Senior High School - STEM Strand",
    school: "Olivarez College Paranaque",
    period:"2019-2021"
  }
]

const skills = [
  { category: "Technical", items: ["C#", "Python", "HTML and CSS", "Data Analysis"] },
  { category: "Soft Skills", items: ["Communication", "Teamwork", "Problem Solving"] },
  { category: "Tools", items: ["Google Workspace", "Visual Studio Code", "Git and Github"] },
]


const RESUME_PDF_PATH = "/Villamin_Joseph_Resume.pdf"

export function ResumeSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {
    const a = document.createElement("a")
    a.href = RESUME_PDF_PATH
    a.download = "Resume_Your_Name.pdf"
    a.click()
  }

  return (
    <section
      id="resume"
      ref={ref}
      className="relative min-h-screen px-6 py-24 lg:ml-64 lg:px-16"
    >
      <div className="mx-auto max-w-4xl">
        <div
          className={cn(
            "mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between transition-all duration-1000",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-primary font-medium">
              Electronic Resume
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              My Resume
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={handleDownload}
              className="gap-2"
            >
              <Download className="h-4 w-4" />
              Download PDF
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2"
            >
              <a href={RESUME_PDF_PATH} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
                View PDF
              </a>
            </Button>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="gap-2"
            >
              <a href="mailto:your.email@example.com?subject=Resume%20Inquiry">
                <Mail className="h-4 w-4" />
                Email
              </a>
            </Button>
          </div>
        </div>

        {/* PDF Viewer Section */}
        <div
          className={cn(
            "mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm transition-all duration-1000 delay-100",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/20">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="mb-1 text-lg font-semibold text-foreground">Resume Document</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Download my complete resume as a PDF or view it directly in your browser
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={RESUME_PDF_PATH}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/20 hover:border-primary"
                >
                  <ExternalLink className="h-4 w-4" />
                  Open in New Tab
                </a>
                <button
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 rounded-lg border border-accent/30 bg-accent/10 px-4 py-2 text-sm font-medium text-accent transition-all hover:bg-accent/20 hover:border-accent"
                >
                  <Download className="h-4 w-4" />
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div
          className={cn(
            "space-y-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm print:border-none print:bg-transparent print:p-0 transition-all duration-1000 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          {/* Header */}
          <div className="border-b border-primary/20 pb-8 text-center print:text-left">
            <h3 className="mb-2 text-3xl font-bold text-foreground">Joseph Villamin</h3>
            <p className="text-muted-foreground">
              pavedwt@gmail.com • (123) 456-7890
            </p>
            <p className="text-muted-foreground">
              https://www.linkedin.com/in/joseph-emmanuel-villamin-28b0073a8/ • https://github.com/pibdiwi/
            </p>
          </div>

          {/* Education */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
              Education
            </h4>
            {education.map((edu, index) => (
              <div key={index} className="group">
                <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                  <h5 className="font-semibold text-foreground">{edu.degree}</h5>
                  <span className="text-sm text-muted-foreground">{edu.period}</span>
                </div>
                <p className="text-muted-foreground">{edu.school}</p>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
              Experience
            </h4>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <div key={index} className="group">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
                    <h5 className="font-semibold text-foreground">
                      {exp.title} • {exp.company}
                    </h5>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="mt-2 text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-widest text-primary">
              Skills
            </h4>
            <div className="grid gap-6 sm:grid-cols-3">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h5 className="mb-3 font-medium text-foreground">{skillGroup.category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary font-medium print:border-muted-foreground transition-all hover:bg-primary/20 hover:border-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
