import type { WorkExperience } from "@/types"
import { ExperienceItem } from "./experience-item"
import { ExperienceLoadingSkeleton } from "./experience-loading-skeleton"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"
import { VerticalTimeline, TimelineItem } from "@/components/vertical-timeline"
import { useBreakpoint } from "@/hooks/use-breakpoint"

interface ExperienceTimelineProps {
  experiences: WorkExperience[]
  loading?: boolean
  error?: string | null
}

export function ExperienceTimeline({ experiences, loading, error }: ExperienceTimelineProps) {
  const isMobile = useBreakpoint(768) // md breakpoint
  
  if (loading) return <ExperienceLoadingSkeleton />

  if (error) return <Error pageName="work experience" error={error} />

  if (experiences.length === 0) return <NoItemsAvailable itemName="work experience" />

  if (isMobile) return <div className="space-y-6">
    {experiences.map((experience, index) => (
      <ExperienceItem key={index} experience={experience} />
    ))}
  </div>

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