import { Location } from "./location"
import { Hideable } from "./hideable"

export interface Author {
  name: string
  isUser: boolean
}

export interface Publication extends Location, Hideable {
  showInResume: boolean
  title: string
  authors: Author[]
  year: number
  description: string
  institution: string
  url?: string
  linkText?: string
} 