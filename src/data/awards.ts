import type { Period } from "../utils/period";

export interface Award {
  title: string;
  description: string;
  date?: Date | number | Period;  // Use if obtained once
  instances?: {
    description: string;
    date: Date | number | Period;
  }[];
}

export const AWARDS: Award[] = [
  {
    title: "Summa Cum Laude",
    description: `Summa Cum Laude is the highest undergraduate academic honor. Eligibility requires a cumulative GPA within the top 1% of graduates from the faculty over the past five years, and demonstrated integral merits in an interview before a commission appointed by the Academic Council.`,
    date: new Date("2025-04-07"),
  },
  {
    title: "Athletic Career Distinction",
    description: `The Athletic Career Distinction is awarded to a single student in the graduating class for exemplary leadership, commitment, and ethics in sports. Awarded citing 41 medals, including 24 gold medals, and two years as elected captain.`,
    date: new Date("2025-04-07"),
  },
  {
    title: "Ramón de Zubiría Awardee",
    description: `Recognition awarded annually to the undergraduate student with the highest cumulative GPA among all students in their major`,
    instances: [
      {
        description: `Cumulative GPA of 4.90 / 5.00 in Systems and Computing Engineering`,
        date: new Date("2023-11-15"),
      }, 
      {
        description: `Cumulative GPA of 4.91 / 5.00 in Systems and Computing Engineering`,
        date: new Date("2024-11-13"),
      }, 
    ],
  },
  {
    title: "Semester Excellence Awardee",
    description: `Recognition awarded to the student who achieved the highest semester GPA in their undergraduate program during the immediately preceding semester.`,
    instances: [
      {
        description: `Semester GPA of 4.90 / 5.00 in Physics`,
        date: new Date("2021-06-30"),
      },
      {
        description: `Semester GPA of 4.86 / 5.00 in Physics`,
        date: new Date("2021-11-30"),
      },
      {
        description: `Semester GPA of 4.97 / 5.00 in Systems and Computing Engineering`,
        date: new Date("2023-11-15"),
      },
    ],
  },
];
