import type { Hideable, MonthYear, Location} from "./types";

export interface Education extends Location, Hideable {
  degree: string;
  institution: string;
  startDate?: Date;
  graduationDate?: Date;
  trueEndDate?: Date;  // Kept for historical reasons
  honors?: string;
  gpa?: `${string}.${string}/${string}.${string}`;
  details?: string[];
}

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. Systems and Computing Engineering",
    honors: "Summa Cum Laude",
    institution: "Universidad de los Andes",
    city: "Bogotá",
    country: "Colombia",
    startDate: new Date("2020-08-08"),  // Unclear if this is the actual start date
    graduationDate: new Date("2025-04-07"),
    trueEndDate: new Date("2024-12-09"),  // Last day of classes
    gpa: "4.92/5.00",
    details: [
      "Best cumulative GPA in the Systems and Computing Engineering program in the XXI century",
      "Highest cumulative GPA in the Faculty of Engineering in the last 17 years",
    ],
  },
  {
    degree: "Bachiller Académico",
    institution: "Colegio San Carlos",
    city: "Bogotá",
    country: "Colombia",
    graduationDate: new Date("2020-06-26"),
    honors: "Valedictorian",
    gpa: "92.21 / 100.00",
    isHidden: true,
  }
];
