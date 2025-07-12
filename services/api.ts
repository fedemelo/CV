import axios, { AxiosInstance, AxiosError, AxiosResponse } from 'axios'
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
  ApiError
} from '@/types'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8003'

class ApiClient {
  private client: AxiosInstance

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error: AxiosError<ApiError>) => {
        if (error.response?.data) {
          const apiError = error.response.data
          throw new Error(apiError.message || `HTTP error! status: ${error.response.status}`)
        } else if (error.request) {
          throw new Error('Network error: Unable to reach the server')
        } else {
          throw new Error(`Request failed: ${error.message}`)
        }
      }
    )
  }

  private async request<T>(endpoint: string): Promise<T> {
    try {
      const response = await this.client.get<T>(endpoint)
      return response.data
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('Unknown API error occurred')
    }
  }

  getEducation = async (): Promise<Education[]> => {
    return this.request<Education[]>('/api/education')
  }

  getWorkExperience = async (): Promise<WorkExperience[]> => {
    return this.request<WorkExperience[]>('/api/work-experience')
  }

  getLanguages = async (): Promise<Language[]> => {
    return this.request<Language[]>('/api/languages')
  }

  getAwards = async (): Promise<Award[]> => {
    return this.request<Award[]>('/api/awards')
  }

  getRelevantCoursework = async (): Promise<RelevantCoursework[]> => {
    return this.request<RelevantCoursework[]>('/api/relevant-coursework')
  }

  getResearchInterests = async (): Promise<ResearchInterest[]> => {
    return this.request<ResearchInterest[]>('/api/research-interests')
  }

  getTeaching = async (): Promise<Teaching[]> => {
    return this.request<Teaching[]>('/api/teaching')
  }

  getExtracurricular = async (): Promise<Extracurricular[]> => {
    return this.request<Extracurricular[]>('/api/extracurricular')
  }

  getPersonalInfo = async (): Promise<PersonalInfo[]> => {
    return this.request<PersonalInfo[]>('/api/personal-info')
  }

  getHealth = async (): Promise<{ status: string; timestamp: string }> => {
    return this.request<{ status: string; timestamp: string }>('/api/health')
  }
}

export const apiClient = new ApiClient(API_BASE_URL)