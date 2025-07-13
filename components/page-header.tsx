import { DownloadCVOrResume } from "./download-cv-or-resume"

export function PageHeader({title, subtitle, downloadButtons}: {title: string, subtitle?: string, downloadButtons?: boolean}) {
  return (
    <div className="space-y-4">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl">{subtitle}</p>}
      {downloadButtons && <DownloadCVOrResume />}
    </div>
  )
} 