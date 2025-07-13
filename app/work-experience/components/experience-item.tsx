import { MapPin, Calendar, Briefcase } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { WorkExperience } from "@/types"
import { DisplayContextInfo } from "@/components/display-context-info"

interface ExperienceItemProps {
  experience: WorkExperience
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <div className="border rounded-lg p-6 space-y-3">
      <ExperienceHeader title={experience.title} organization={experience.organization} />

      <div className="flex flex-row justify-between">
        <DisplayContextInfo
          startDate={experience.startDate}
          endDate={experience.endDate}
          location={{
            city: experience.city,
            state: experience.state,
            country: experience.country,
          }}
          team={experience.team}
        />

        <WorkDetailsTags workMode={experience.workMode} employmentType={experience.employmentType} />
      </div>

      <FullWorkDescription description={experience.description} achievements={experience.achievements} />

      <TechnologiesTags technologies={experience.technologies} />
    </div>
  )
}

function ExperienceHeader({ title, organization }: { title: string, organization: string }) {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        <Briefcase className="h-5 w-5 text-primary flex-shrink-0" />
        <h3 className="text-xl font-semibold leading-tight">{title}</h3>
      </div>
    </div>
  )
}

function WorkDetailsTags({ workMode, employmentType }: { workMode: string, employmentType: string }) {
  return (
    <div className="flex items-center gap-4 text-sm text-muted-foreground">
      <span className="px-2 py-1 bg-muted rounded-md">{workMode}</span>
      <span className="px-2 py-1 bg-muted rounded-md">{employmentType}</span>
    </div>
  )
}

function FullWorkDescription({ description, achievements }: { description: string, achievements?: string[] }) {

  const hasAchievements = achievements && achievements.length > 0

  return (
    <div className="space-y-1">
      <p className="leading-relaxed text-justify">{description}</p>

      {hasAchievements && (
        <div className="space-y-2">
          <ul className="list-disc list-inside space-y-1">
            {achievements.map((achievement, i) => (
              <li key={i}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function TechnologiesTags({ technologies }: { technologies?: string[] }) {
  if (!technologies || technologies.length === 0) return null

  return (
    <div className="space-y-1">
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, i) => (
          <Badge key={i} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}