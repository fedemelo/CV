"use client"

import { useEducation } from "@/hooks/useApiData"
import { EducationTimeline } from "./components/education-timeline"
import { PageHeader } from "@/components/page-header"

export default function EducationPage() {
  const { data: education, loading, error } = useEducation()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Education" downloadButtons />
      <EducationTimeline education={education} loading={loading} error={error} />
    </div>
  )
}
