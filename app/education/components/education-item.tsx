import { GraduationCap, Star } from "lucide-react"
import type { Education } from "@/types"
import { ContextInfo } from "@/components/context-info"
import { DescriptionAndBullets } from "@/components/description-and-bullets"

interface EducationItemProps {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="border rounded-lg p-6 space-y-3">
      <div className="flex flex-row justify-between">
        <EducationHeader degree={education.degree} organization={education.organization} />
        
        <EducationDetails gpa={education.gpa} honors={education.honors} />
      </div>

      <ContextInfo
        startDate={education.startDate}
        endDate={education.graduationDate}
        location={{
          city: education.city,
          state: education.state,
          country: education.country,
        }}
        supervisor={education.supervisor}
      />

      <DescriptionAndBullets achievements={education.details} />
    </div>
  )
}

function EducationHeader({ degree, organization }: { degree: string; organization: string }) {
  return (
    <div className="space-y-0">
      <div className="flex items-center gap-2">
        <GraduationCap className="h-5 w-5 text-primary flex-shrink-0" />
        <h3 className="text-xl font-semibold leading-tight">{degree}</h3>
      </div>
      <p className="text-lg text-muted-foreground ml-7">{organization}</p>
    </div>
  )
}

function EducationDetails({ gpa, honors }: { gpa?: string; honors?: string }) {
  if (!gpa && !honors) return null

  return (
    <div className="flex flex-col items-end gap-2 text-sm">
      {gpa && (
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">GPA:</span>
          <span className="font-medium">{gpa}</span>
        </div>
      )}
      {honors && (
        <div className="flex items-center gap-2">
          <Star className="h-4 w-4 text-primary" />
          <span className="font-medium text-primary">{honors}</span>
        </div>
      )}
    </div>
  )
} 