export function HomeLoadingSkeleton() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8 animate-pulse">
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="h-16 bg-muted rounded w-3/4"></div>
            <div className="h-8 bg-muted rounded w-full"></div>
            <div className="h-8 bg-muted rounded w-2/3"></div>
          </div>
          <div className="h-6 bg-muted rounded w-1/2"></div>
        </div>
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-12 bg-muted rounded w-36"></div>
          ))}
        </div>
      </div>
    </div>
  )
}