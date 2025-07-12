"use client"

import { useEducation } from "@/hooks/useApiData"
import { Header, EducationTimeline } from "./components"

export default function AcademicExperiencePage() {
  const { data: education, loading, error } = useEducation()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Header />
      <EducationTimeline education={education} loading={loading} error={error} />
    </div>
  )
}
