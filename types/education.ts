import { Course } from "./relevant-coursework"

export interface Education {
  showInCv?: boolean
  city: string
  state?: string
  country?: string
  degree: string
  organization: string
  startDate?: string
  graduationDate?: string
  trueEndDate?: string
  honors?: string
  gpa?: string
  details?: string[]
  course?: Course
  supervisor?: string
}
