import type { MonthYear, Period } from "./types";

export interface Award {
  title: string;
  description: string;
  date: MonthYear | number | Period;
}

export const AWARDS: Award[] = [
  {
    title: "Summa Cum Laude",
    description: `Graduated with the highest honors, Summa Cum Laude, from the University of the Andes, recognizing exceptional academic performance and holistic merits.

    Eligibility requires a cumulative GPA within the top 1% of graduates from the Engineering School over the past five years, and demonstrated comprehensive merits in an interview before a commission appointed by the Academic Council. Achieved a cumulative GPA of 4.92/5.00 in Systems and Computing Engineering, the highest in the evaluation period.
    `,
    date: "Apr, 2025"
  },
  {
    title: "Athletic Career Distinction",
    description: `Graduated with the Athletic Career Distinction ("Distinción a la Trayectoria Deportiva") from the University of the Andes, awarded for exemplary leadership, commitment, and ethics in sports. Achieved 41 medals, including 24 golds, and served as elected captain for two consecutive years.`,
    date: "Apr, 2025"
  },
  {
    title: "Ramón de Zubiría Award",
    description: `Honored with the Ramón de Zubiría Award ("Distinción Ramón de Zubiría") for academic excellence at the University of the Andes, awarded annually to the top undergraduate student with the highest cumulative GPA in their program, with a cumulative GPA of 4.91 / 5.00 in Systems and Computing Engineering.`,
    date: 2024,
  },
  {
    title: "Ramón de Zubiría Award",
    description: `Honored with the Ramón de Zubiría Award ("Distinción Ramón de Zubiría") for academic excellence at the University of the Andes, awarded annually to the top undergraduate student with the highest cumulative GPA in their program, with a cumulative GPA of 4.90 / 5.00 in Systems and Computing Engineering.`,
    date: 2023,
  },
  {
    title: "Semester Excellence Award",
    description: `Recipient of the Semester Excellence Award ("Distinción de Excelencia Semestral") for achieving the highest semester GPA in the Systems and Computing Engineering undergraduate program during the first semester of 2023 at the University of the Andes, with a semester GPA of 4.97 / 5.00.`,
    date: "Spring 2023"
  },
  {
    title: "Semester Excellence Award",
    description: `Recipient of the Semester Excellence Award ("Distinción de Excelencia Semestral") for achieving the highest semester GPA in the Physics undergraduate program during the first semester of 2021 at the University of the Andes, with a semester GPA of 4.86 / 5.00.`,
    date: "Spring 2021"
  },
  {
    title: "Semester Excellence Award",
    description: `Recipient of the Semester Excellence Award ("Distinción de Excelencia Semestral") for achieving the highest semester GPA in the Physics undergraduate program during the second semester of 2020 at the University of the Andes, with a semester GPA of 4.90 / 5.00.`,
    date: "Fall 2020"
  }
];
