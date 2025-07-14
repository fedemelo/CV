"use client"

import { useAwards } from "@/hooks/useApiData"
import { PageHeader } from "@/components/page-header"
import { AwardsGrid } from "./components/awards-grid"

export default function AwardsPage() {
  const { data: awards, loading, error } = useAwards()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <PageHeader title="Awards & Recognition" subtitle="Honors, achievements, and recognition received throughout my academic and professional career." />
      <AwardsGrid awards={awards} loading={loading} error={error} />
    </div>
  )
}
