import type { WorkExperience } from "@/types"
import { ExperienceItem } from "./experience-item"
import { ExperienceLoadingSkeleton } from "./experience-loading-skeleton"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"
import { VerticalTimeline, TimelineItem } from "@/components/ui/vertical-timeline"

interface ExperienceTimelineProps {
  experiences: WorkExperience[]
  loading?: boolean
  error?: string | null
}

export function ExperienceTimeline({ experiences, loading, error }: ExperienceTimelineProps) {
  if (loading) return <ExperienceLoadingSkeleton />

  if (error) return <Error pageName="work experience" error={error} />

  if (experiences.length === 0) return <NoItemsAvailable itemName="work experience" />

  return (
    <VerticalTimeline>
      {experiences.map((experience, index) => (
        <TimelineItem key={index}>
          <ExperienceItem experience={experience} />
        </TimelineItem>
      ))}
    </VerticalTimeline>
  )
} 