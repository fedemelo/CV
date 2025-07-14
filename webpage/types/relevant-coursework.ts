import { Hideable } from "./hideable"

export interface Course extends Hideable {
  name: string
  originalName?: string
  code: string
  credits?: number
  description?: string
  link?: string
}

export interface RelevantCoursework {
  area: string
  courses: Course[]
}