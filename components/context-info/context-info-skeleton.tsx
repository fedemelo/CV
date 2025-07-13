export function ContextInfoSkeleton() {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm">
      {[1, 2, 3].map((i) => (
      <div className="flex items-center gap-2" key={i}>
        <div className="h-4 w-4 bg-muted rounded"></div>
        <div className="h-4 w-28 bg-muted rounded"></div>
      </div>
    ))}
  </div>
  )
}