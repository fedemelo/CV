import type { Education } from "@/types"
import { EducationItem } from "./education-item"

interface EducationTimelineProps {
  education: Education[]
  loading?: boolean
  error?: string | null
}

export function EducationTimeline({ education, loading, error }: EducationTimelineProps) {
  if (loading) {
    return (
      <div className="space-y-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="animate-pulse">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0">
                <div className="h-12 w-48 bg-muted rounded-lg"></div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <div className="h-6 bg-muted rounded w-3/4"></div>
                  <div className="h-5 bg-muted rounded w-1/2"></div>
                  <div className="h-4 bg-muted rounded w-1/3"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-4 bg-muted rounded w-full"></div>
                  <div className="h-4 bg-muted rounded w-5/6"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-destructive">Error loading education data: {error}</p>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}
    </div>
  )
} 