export interface Course {
  showInCV?: boolean
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