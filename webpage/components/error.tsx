export function Error({ pageName, error }: { pageName: string, error: string }) {
  return (
    <div className="text-center py-8">
      <p className="text-destructive">Error loading {pageName}: {error}</p>
    </div>
  )
}