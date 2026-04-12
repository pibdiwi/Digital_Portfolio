"use client"

import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"
import { GraduationCap, Target, Heart, ArrowRight } from "lucide-react"

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

export function ReflectionsSection() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

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
