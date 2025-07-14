import { VerticalTimeline, TimelineItem } from "@/components/vertical-timeline"
import { ContextInfoSkeleton } from "@/components/context-info"
import { DescriptionAndBulletsSkeleton } from "@/components/description-and-bullets"

export function TeachingLoadingSkeleton() {
  return (
    <VerticalTimeline>
      {[1, 2, 3].map((i) => (
        <TimelineItem key={i}>
          <div className="animate-pulse border rounded-lg p-6 space-y-3">
            <TeachingHeaderSkeleton />
            
            <ContextInfoSkeleton />

            <CourseInformationSkeleton />

            <DescriptionAndBulletsSkeleton />
          </div>
        </TimelineItem>
      ))}
    </VerticalTimeline>
  )
}

function TeachingHeaderSkeleton() {
  return (
    <div className="space-y-1">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 bg-muted rounded"></div>
        <div className="h-6 bg-muted rounded w-3/4"></div>
      </div>
      <div className="h-5 bg-muted rounded w-1/2 ml-7"></div>
    </div>
  )
}

function CourseInformationSkeleton() {
  return (
    <div className="bg-muted/50 rounded-lg p-4 space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-48"></div>
      </div>
      <div className="h-4 bg-muted rounded w-full"></div>
    </div>
  )
}
