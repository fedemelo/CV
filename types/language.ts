import { Hideable } from "./hideable"

export interface LanguageCertification extends Hideable {
  name: string
  id: string
  grade: string
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  date: string
}

export interface Language extends Hideable {
  name: string
  proficiency: string
  certifications?: LanguageCertification[]
}