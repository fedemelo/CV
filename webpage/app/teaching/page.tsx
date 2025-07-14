"use client"

import { useTeaching } from "@/hooks/useApiData"
import { TeachingTimeline } from "./components/teaching-timeline"
import { PageHeader } from "@/components/page-header"

export default function TeachingPage() {
  const { data: teaching, loading, error } = useTeaching()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Teaching" subtitle="Educational roles and contributions to academic institutions." />
      <TeachingTimeline teaching={teaching} loading={loading} error={error} />
    </div>
  )
}
