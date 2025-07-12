export interface AwardInstance {
  description: string
  date: string
}

export interface Award {
  city: string
  state?: string
  country?: string
  title: string
  description: string
  organization: string
  date?: string
  instances?: AwardInstance[]
}