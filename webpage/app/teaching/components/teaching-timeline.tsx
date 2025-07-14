import type { Teaching } from "@/types"
import { TeachingItem } from "./teaching-item"
import { TeachingLoadingSkeleton } from "./teaching-loading-skeleton"
import { Error } from "@/components/error"
import { NoItemsAvailable } from "@/components/no-items-available"
import { VerticalTimeline, TimelineItem } from "@/components/vertical-timeline"

interface TeachingTimelineProps {
  teaching: Teaching[]
  loading?: boolean
  error?: string | null
}

export function TeachingTimeline({ teaching, loading, error }: TeachingTimelineProps) {
  if (loading) return <TeachingLoadingSkeleton />

  if (error) return <Error pageName="teaching experience" error={error} />

  if (teaching.length === 0) return <NoItemsAvailable itemName="teaching experience" />

  return (
    <VerticalTimeline>
      {teaching.map((experience, index) => (
        <TimelineItem key={index}>
          <TeachingItem teaching={experience} />
        </TimelineItem>
      ))}
    </VerticalTimeline>
  )
} 