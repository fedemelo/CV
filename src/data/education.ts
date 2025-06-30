import { UNIANDES } from "./constants";
import type { Hideable, Location} from "./types";

export interface Education extends Location, Hideable {
  degree: string;
  organization: string;
  startDate?: Date;
  graduationDate?: Date;  // Kept for historical reasons
  trueEndDate?: Date;  // Actual date used for the year range
  honors?: string;
  gpa?: `${string}.${string}/${string}.${string}`;
  details?: string[];
}

export const EDUCATION: Education[] = [
  {
    degree: "B.Sc. Systems and Computing Engineering",
    honors: "Summa Cum Laude",
    ...UNIANDES,
    startDate: new Date("2020-08-08"),  // Unclear if this is the actual start date
    graduationDate: new Date("2025-04-07"),
    trueEndDate: new Date("2024-12-08"),  // Sunday, last day to turn in deliverables
    gpa: "4.92/5.00",
    details: [
      "Highest cumulative GPA in the Faculty of Engineering in the last 17 years",
      "Best cumulative GPA in the Systems and Computing Engineering program in the XXI century",
    ],
  },
  {
    degree: "Bachiller Académico",
    organization: "Colegio San Carlos",
    city: "Bogotá",
    country: "Colombia",
    graduationDate: new Date("2020-06-26"),
    honors: "Valedictorian",
    gpa: "92.21 / 100.00",
    isHidden: true,
  }
];
