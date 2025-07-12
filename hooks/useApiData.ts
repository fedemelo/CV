import { useState, useEffect, useCallback } from 'react'
import { apiClient } from '@/services/api'
import type {
  Education,
  WorkExperience,
  Language,
  Award,
  RelevantCoursework,
  ResearchInterest,
  Teaching,
  Extracurricular,
  PersonalInfo,
} from '@/types'

export interface UseApiDataReturn<T> {
  data: T[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

interface UseApiDataOptions<T> {
  transform?: (data: T[]) => T[]
}

export function useApiData<T = any>(
  serviceFunction: () => Promise<T[]>,
  options: UseApiDataOptions<T> = {}
): UseApiDataReturn<T> {
  const [data, setData] = useState<T[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { transform } = options

  const fetchData = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      let result = await serviceFunction()

      result = result.filter(item => {
        return !(item as { showInCv?: boolean }).showInCv === false
      })

      if (transform) result = transform(result)

      setData(result)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data')
    } finally {
      setLoading(false)
    }
  }, [serviceFunction, transform])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  }
}

export function useAwards(): UseApiDataReturn<Award> {
  return useApiData(apiClient.getAwards)
}

export function useEducation(): UseApiDataReturn<Education> {
  return useApiData(apiClient.getEducation)
}

export function useWorkExperience(): UseApiDataReturn<WorkExperience> {
  return useApiData(apiClient.getWorkExperience)
}

export function useLanguages(): UseApiDataReturn<Language> {
  return useApiData(apiClient.getLanguages)
}

export function useRelevantCoursework(): UseApiDataReturn<RelevantCoursework> {
  return useApiData(apiClient.getRelevantCoursework)
}

export function useResearchInterests(): UseApiDataReturn<ResearchInterest> {
  return useApiData(apiClient.getResearchInterests)
}

export function useTeaching(): UseApiDataReturn<Teaching> {
  return useApiData(apiClient.getTeaching)
}

export function useExtracurricular(): UseApiDataReturn<Extracurricular> {
  return useApiData(apiClient.getExtracurricular)
}

export function usePersonalInfo(): UseApiDataReturn<PersonalInfo> {
  return useApiData(apiClient.getPersonalInfo)
}