import { ContextInfoSkeleton } from "@/components/context-info"
import { DescriptionAndBulletsSkeleton } from "@/components/description-and-bullets"

export function EducationLoadingSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse border rounded-lg p-6 space-y-3">
          <div className="flex flex-row justify-between">
            <EducationHeaderSkeleton />
            <EducationDetailsSkeleton />
          </div>

          <ContextInfoSkeleton />

          <DescriptionAndBulletsSkeleton />
        </div>
      ))}
    </div>
  )
}

function EducationHeaderSkeleton() {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        <div className="h-5 w-5 bg-muted rounded"></div>
        <div className="h-6 bg-muted rounded w-64"></div>
      </div>
      <div className="h-5 bg-muted rounded w-48 ml-7"></div>
    </div>
  )
}

function EducationDetailsSkeleton() {
  return (
    <div className="flex flex-col items-end gap-2 text-sm">
      <div className="flex items-center gap-2">
        <div className="h-4 bg-muted rounded w-12"></div>
        <div className="h-4 bg-muted rounded w-8"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-4 w-4 bg-muted rounded"></div>
        <div className="h-4 bg-muted rounded w-20"></div>
      </div>
    </div>
  )
}