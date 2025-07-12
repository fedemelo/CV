import { Location } from "./location"

export interface AwardInstance {
  description: string
  date: string
}

export interface Award extends Location {
  title: string
  description: string
  organization: string
  date?: string
  instances?: AwardInstance[]
}