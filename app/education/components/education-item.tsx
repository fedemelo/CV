import { MapPin, Calendar, GraduationCap } from "lucide-react"
import type { Education } from "@/types"
import { formatDate } from "@/utils/date"

interface EducationItemProps {
  education: Education
}

export function EducationItem({ education }: EducationItemProps) {
  return (
    <div className="relative">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Date Badge */}
        <div className="flex-shrink-0">
          <div className="inline-flex items-center px-4 py-2 border-2 border-primary rounded-lg bg-background">
            <Calendar className="mr-2 h-4 w-4 text-primary" />
            <span className="font-medium text-primary">
              {education.startDate && formatDate(education.startDate)} – {education.graduationDate ? formatDate(education.graduationDate) : "present"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-xl font-semibold">{education.degree}</h3>
            <p className="text-lg text-muted-foreground">{education.organization}</p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
              <div className="flex items-center">
                <MapPin className="mr-1 h-4 w-4" />
                {education.city}, {education.state && `${education.state}, `}
                {education.country}
              </div>
              {education.gpa && (
                <div className="flex items-center">
                  <GraduationCap className="mr-1 h-4 w-4" />
                  GPA: {education.gpa}
                </div>
              )}
            </div>
            {education.honors && <p className="text-sm font-medium text-primary mt-1">{education.honors}</p>}
            {education.supervisor && (
              <p className="text-sm text-muted-foreground mt-1">Supervised by {education.supervisor}</p>
            )}
          </div>

          {education.details && education.details.length > 0 && (
            <div>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {education.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
} 