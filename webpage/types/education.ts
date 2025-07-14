import { Location } from "./location"
import { Course } from "./relevant-coursework"
import { Hideable } from "./hideable"

export interface Education extends Location, Hideable {
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
