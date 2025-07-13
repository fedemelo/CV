import { VerticalTimeline, TimelineItem } from "@/components/vertical-timeline"
import { DisplayContextInfoLoadingSkeleton } from "@/components/display-context-info"

export function ExperienceLoadingSkeleton() {
  return (
    <VerticalTimeline>
      {[1, 2, 3].map((i) => (
        <TimelineItem key={i}>
          <div className="animate-pulse border rounded-lg p-6 space-y-3">
            <ExperienceHeaderSkeleton />
            
            <div className="flex flex-row justify-between">
              <DisplayContextInfoLoadingSkeleton />
              <WorkDetailsTagsSkeleton />
            </div>

            <FullWorkDescriptionSkeleton />
            
            <TechnologiesTagsSkeleton />
          </div>
        </TimelineItem>
      ))}
    </VerticalTimeline>
  )
}

function ExperienceHeaderSkeleton() {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 bg-muted rounded"></div>
        <div className="h-6 bg-muted rounded w-3/4"></div>
      </div>
    </div>
  )
}

function WorkDetailsTagsSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <div className="h-6 bg-muted rounded-md w-16"></div>
      <div className="h-6 bg-muted rounded-md w-20"></div>
    </div>
  )
}

function FullWorkDescriptionSkeleton() {
  return (
    <div className="space-y-1">
      <div className="space-y-2">
        <div className="h-4 bg-muted rounded w-full"></div>
        <div className="h-4 bg-muted rounded w-5/6"></div>
        <div className="h-4 bg-muted rounded w-4/6"></div>
      </div>
      <div className="space-y-2">
        <div className="space-y-1">
          <div className="h-4 bg-muted rounded w-11/12"></div>
          <div className="h-4 bg-muted rounded w-10/12"></div>
        </div>
      </div>
    </div>
  )
}

function TechnologiesTagsSkeleton() {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-2">
        <div className="h-6 bg-muted rounded w-16"></div>
        <div className="h-6 bg-muted rounded w-20"></div>
        <div className="h-6 bg-muted rounded w-14"></div>
        <div className="h-6 bg-muted rounded w-18"></div>
      </div>
    </div>
  )
}