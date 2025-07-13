import type { Education } from "@/types"
import { EducationItem } from "./education-item"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"
import { EducationLoadingSkeleton } from "./education-loading-skeleton"

interface EducationTimelineProps {
  education: Education[]
  loading?: boolean
  error?: string | null
}

export function EducationTimeline({ education, loading, error }: EducationTimelineProps) {
  if (loading) return <EducationLoadingSkeleton />

  if (error) return <Error error={error} pageName="education" />

  if (education.length === 0) return <NoItemsAvailable itemName="education" />

  return (
    <div className="space-y-8">
      {education.map((edu, index) => (
        <EducationItem key={index} education={edu} />
      ))}
    </div>
  )
} 