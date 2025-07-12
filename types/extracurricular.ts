import { Hideable } from "./hideable"

export interface Extracurricular extends Hideable {
  description: string
  events: string[]
}