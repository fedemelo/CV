type Month =
  | "Jan"
  | "Feb"
  | "Mar"
  | "Apr"
  | "May"
  | "Jun"
  | "Jul"
  | "Aug"
  | "Sep"
  | "Oct"
  | "Nov"
  | "Dec";

export type MonthYear =
  | `${Month}, 20${number}`

export type Period = `${'Fall' | 'Spring'} 20${number}`

export interface Course extends Hideable {
  name: string;
  originalName?: string;
  code: string;
  credits?: number;
  description?: string;
  link?: string;
}

export interface Location {
  city: string;
  state?: string;
  country?: string;
}

export interface Hideable {
  isHidden?: boolean;
}