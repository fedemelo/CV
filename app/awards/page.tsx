"use client"

import { useAwards } from "@/hooks/useApiData"
import { Header, AwardsGrid } from "./components"

export default function AwardsPage() {
  const { data: awards, loading, error } = useAwards()

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <Header />
      <AwardsGrid awards={awards} loading={loading} error={error} />
    </div>
  )
}
