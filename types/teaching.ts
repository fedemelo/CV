import { Course } from "./relevant-coursework"

export interface Teaching {
  showInCv?: boolean
  city: string
  state?: string
  country?: string
  title: string
  organization: string
  course?: Course
  department?: string
  supervisor?: string
  startDate: string
  endDate?: string
  description: string
  responsibilities: string[]
  achievements?: string[]
  isCurrent?: boolean
}