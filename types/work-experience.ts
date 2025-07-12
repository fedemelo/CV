export interface WorkExperience {
  showInCV?: boolean
  city: string
  state?: string
  country?: string
  title: string
  team?: string
  squad?: string
  organization: string
  startDate: string
  endDate?: string
  description: string
  technologies: string[]
  responsibilities: string[]
  achievements?: string[]
  workMode: 'remote' | 'onsite' | 'hybrid'
  employmentType: 'full-time' | 'part-time' | 'contract' | 'internship'
  isCurrent?: boolean
}