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