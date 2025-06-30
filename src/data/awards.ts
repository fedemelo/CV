import { UNIANDES } from "./constants";
import type { Location } from "./types";

export interface Award extends Location {
  title: string;
  description: string;
  organization: string;
  date?: Date;  // Use if obtained once
  instances?: {
    description: string;
    date: Date;
  }[];
}

export const AWARDS: Award[] = [
  {
    title: "Summa Cum Laude",
    description: `Summa Cum Laude is the highest undergraduate academic honor. Eligibility requires a cumulative GPA within the top 1% of graduates from the faculty over the past five years, and demonstrated integral merits in an interview before a commission appointed by the Academic Council.`,
    date: new Date("2025-04-07T12:00:00-05:00"),
    ...UNIANDES,
  },
  {
    title: "Athletic Career Distinction",
    description: `The Athletic Career Distinction is awarded to a single student in the graduating class for exemplary leadership, commitment, and ethics in sports. Awarded citing 41 swimming medals, including 24 gold, and two years as elected team captain.`,
    date: new Date("2025-04-07T12:00:00-05:00"),
    ...UNIANDES,
  },
  {
    title: "Ramón de Zubiría Awardee",
    description: `Recognition awarded annually to the undergraduate student with the highest cumulative GPA among all students in their major.`,
    ...UNIANDES,
    instances: [
      {
        description: `Cumulative GPA of 4.90 / 5.00 in Systems and Computing Engineering`,
        date: new Date("2023-11-15T12:00:00-05:00"),
      }, 
      {
        description: `Cumulative GPA of 4.91 / 5.00 in Systems and Computing Engineering`,
        date: new Date("2024-11-13T12:00:00-05:00"),
      }, 
    ],
  },
  {
    title: "Semester Excellence Awardee",
    description: `Recognition awarded to the student who achieved the highest semester GPA in their undergraduate program during the immediately preceding semester.`,
    ...UNIANDES,
    instances: [
      {
        description: `Semester GPA of 4.90 / 5.00 in Physics`,
        date: new Date("2021-06-30T12:00:00-05:00"),
      },
      {
        description: `Semester GPA of 4.86 / 5.00 in Physics`,
        date: new Date("2021-11-30T12:00:00-05:00"),
      },
      {
        description: `Semester GPA of 4.97 / 5.00 in Systems and Computing Engineering`,
        date: new Date("2023-11-15T12:00:00-05:00"),
      },
    ],
  },
];
