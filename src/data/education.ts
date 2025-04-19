import type { MonthYear } from "./types";

export interface Education {
  degree: string;
  institution: string;
  location: string;
  startDate?: MonthYear;
  endDate?: MonthYear;
  honors?: string;
  gpa?: `${string}.${string}/${string}.${string}`;
  details?: string[];
  isHidden?: boolean;
}

export const EDUCATION: Education[] = [
  {
    degree: "Bachelor of Science in Systems and Computing Engineering",
    honors: "Summa Cum Laude",
    institution: "Universidad de los Andes",
    location: "Bogotá, Colombia",
    startDate: "Aug, 2020",
    endDate: "Dec, 2024",
    gpa: "4.92/5.00",
    details: [
      "Best cumulative GPA in the Systems and Computing Engineering program in the XXI century",
      "Highest cumulative GPA in the Faculty of Engineering in the last 17 years",
    ],
  },
  {
    degree: "Bachiller Académico",
    institution: "Colegio San Carlos",
    location: "Bogotá, Colombia",
    endDate: "Dec, 2020",
    honors: "Valedictorian",
    gpa: "92.21 / 100.00",
    isHidden: true,
  }
];
