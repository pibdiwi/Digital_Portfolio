"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { GraduationCap, Target, Heart, ArrowRight, Download, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

const reflections = [
  {
    icon: GraduationCap,
    title: "Lessons Learned",
    content: `My college journey has taught me invaluable lessons that extend far beyond the classroom. I've learned the importance of time management, balancing academics with personal growth and extracurricular activities.

The challenges I faced, from difficult courses to collaborative projects with diverse teams, have strengthened my resilience and adaptability. I've discovered that failure is not the opposite of success but a stepping stone toward it.

Perhaps most importantly, I've learned that continuous learning is a lifelong commitment, and curiosity is the greatest asset one can possess.`,
  },
  {
    icon: Target,
    title: "Career Goals",
    content: `My short-term goal is to secure a position where I can apply my academic knowledge while continuing to learn from experienced professionals. I aim to develop expertise in my chosen field within the first few years of my career.

In the long term, I aspire to take on leadership roles where I can mentor others and contribute to meaningful projects that create positive impact. I'm particularly interested in roles that combine innovation with practical problem-solving.

I believe in setting ambitious yet achievable goals, and I'm committed to the continuous professional development needed to reach them.`,
  },
  {
    icon: Heart,
    title: "Personal Commitment",
    content: `I am committed to maintaining the highest standards of integrity and professionalism in everything I do. I believe in treating others with respect and valuing diverse perspectives.

I pledge to continue learning and growing, both personally and professionally. I will seek feedback, embrace challenges, and remain open to new ideas and experiences.

I commit to giving back to my community and using my skills and knowledge to make a positive difference in the lives of others.`,
  },
]

const nextSteps = [
  "Complete remaining coursework with excellence",
  "Pursue relevant certifications and training",
  "Build a strong professional network",
  "Apply for positions aligned with career goals",
  "Continue developing both technical and soft skills",
]

const REFLECTION_PDF_PATH = "/Villamin_Joseph_Reflection.pdf"

export function ReflectionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  const handleDownload = () => {
    const a = document.createElement("a")
    a.href = REFLECTION_PDF_PATH
    a.download = "Reflection_Joseph_Villamin.pdf"
    a.click()
  }

  return (
    <section
      id="reflections"
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
            Reflections on College Life
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            My Journey & Vision
          </h2>
          <p className="max-w-2xl text-lg text-muted-foreground">
            Reflecting on my academic experience and looking forward to what lies ahead. 
            These thoughts capture my growth, aspirations, and commitment to excellence.
          </p>
        </div>

        {/* Reflection Paper Actions */}
        <div
          className={cn(
            "mb-16 flex flex-wrap gap-3 transition-all duration-1000 delay-100",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <Button
            variant="outline"
            size="sm"
            onClick={handleDownload}
            className="gap-2"
          >
            <Download className="h-4 w-4" />
            Download Reflection Paper
          </Button>
          <Button
            variant="outline"
            size="sm"
            asChild
            className="gap-2"
          >
            <a href={REFLECTION_PDF_PATH} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="h-4 w-4" />
              View Reflection Paper
            </a>
          </Button>
        </div>

        {/* Reflection Cards */}
        <div className="mb-20 grid gap-8 lg:grid-cols-3">
          {reflections.map((reflection, index) => (
            <div
              key={reflection.title}
              className={cn(
                "rounded-2xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm transition-all duration-1000 hover:border-primary/40 hover:bg-primary/10",
                isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              )}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/20">
                <reflection.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-4 text-xl font-semibold text-foreground">
                {reflection.title}
              </h3>
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                {reflection.content.split("\n\n").map((paragraph, pIndex) => (
                  <p key={pIndex}>{paragraph}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Reflection Paper Preview Card */}
        <div
          className={cn(
            "mb-20 rounded-2xl border border-primary/20 bg-primary/5 p-8 backdrop-blur-sm transition-all duration-1000 delay-500",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary/20">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h3 className="mb-1 text-lg font-semibold text-foreground">Reflection Paper</h3>
              <p className="mb-4 text-sm text-muted-foreground">
                Read my comprehensive reflection paper on my college journey, personal growth, and future aspirations
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={REFLECTION_PDF_PATH}
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

        {/* Next Steps */}
        <div
          className={cn(
            "rounded-2xl border border-primary/20 bg-primary/5 p-8 transition-all duration-1000 delay-700 hover:border-primary/40 hover:bg-primary/10",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h3 className="mb-6 text-xl font-semibold text-foreground">Next Steps</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {nextSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-lg border border-primary/20 bg-primary/5 p-4 transition-colors hover:bg-primary/10 hover:border-primary/40"
            >
              <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
