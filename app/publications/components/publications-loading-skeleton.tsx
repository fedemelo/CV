export function PublicationsLoadingSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <div key={i} className="animate-pulse border rounded-lg p-6 space-y-4">
          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-5/6"></div>
          </div>
          <div className="flex gap-2 pt-4">
            {[1, 2, 3].map((j) => (
              <div key={j} className="h-9 bg-muted/50 rounded w-32"></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}