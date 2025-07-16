import { ReactNode } from "react"

interface VerticalTimelineProps {
  children: ReactNode
}

export function VerticalTimeline({ children }: VerticalTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-5 top-10 bottom-10 w-0.5 bg-border"></div>
      <div className="space-y-4">
        {children}
      </div>
    </div>
  )
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex items-center">
      <div className="relative z-10 flex-shrink-0">
        <div className="w-10 h-10 bg-background border-4 border-primary rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
      
      <div className="ml-2 flex-1 pb-8">
        {children}
      </div>
    </div>
  )
} 