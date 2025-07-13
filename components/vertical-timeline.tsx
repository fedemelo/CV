import { ReactNode } from "react"

interface VerticalTimelineProps {
  children: ReactNode
}

export function VerticalTimeline({ children }: VerticalTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border"></div>
      <div className="space-y-8">
        {children}
      </div>
    </div>
  )
}

export function TimelineItem({ children }: { children: ReactNode }) {
  return (
    <div className="relative flex items-start">
      <div className="relative z-10 flex-shrink-0">
        <div className="w-12 h-12 bg-background border-4 border-primary rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
      
      <div className="ml-6 flex-1 pb-8">
        {children}
      </div>
    </div>
  )
} 