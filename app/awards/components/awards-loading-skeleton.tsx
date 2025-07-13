import { DisplayContextInfoLoadingSkeleton } from "@/components/display-context-info"

export function AwardsLoadingSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse border rounded-lg p-6">
          <div className="flex items-start gap-8">
            <div className="flex-1 space-y-4 max-w-3xl">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 bg-muted rounded"></div>
                <div className="h-6 bg-muted rounded w-3/4"></div>
              </div>

              <DisplayContextInfoLoadingSkeleton />

              <div className="space-y-2 max-w-2xl">
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}