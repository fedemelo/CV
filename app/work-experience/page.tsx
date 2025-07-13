"use client"

import { useWorkExperience } from "@/hooks/useApiData"
import { ExperienceTimeline } from "./components/experience-timeline"
import { PageHeader } from "@/components/page-header"

export default function WorkExperiencePage() {
  const { data: experiences, loading, error } = useWorkExperience()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Work Experience" downloadButtons />
      <ExperienceTimeline experiences={experiences} loading={loading} error={error} />
    </div>
  )
}
