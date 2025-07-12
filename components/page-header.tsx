export function PageHeader({title, subtitle}: {title: string, subtitle: string}) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="text-lg text-muted-foreground max-w-2xl">
        {subtitle}
      </p>
    </div>
  )
} 