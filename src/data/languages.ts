import type { Hideable } from "./types";

export interface Language {
  name: string;
  proficiency: string;
  certifications?: Certification[];
}

interface Certification extends Hideable {
  name: string;
  id: string;
  grade: `${number}/${number}`;
  cefrLevel: "A1" | "A2" | "B1" | "B2" | "C1" | "C2";
  date: Date;
}

export const LANGUAGES: Language[] = [
  {
    name: "Spanish",
    proficiency: "Native",
  },
  {
    name: "English",
    proficiency: "Bilingual",
    certifications: [
      {
        name: "IELTS",
        date: new Date("2019-11-30T12:00:00-05:00"),
        grade: "8.0/9.0",
        cefrLevel: "C1",
        id: "19CO001251MELF015A",
        isHidden: true,
      },
      {
        name: "TOEFL",
        date: new Date("2020-02-02T12:00:00-05:00"),
        grade: "110/120",
        cefrLevel: "C1",
        id: "7824 1022 0180 2567",
        isHidden: true,
      },
      {
        name: "IELTS",
        date: new Date("2025-06-07T12:00:00-05:00"),
        grade: "8.5/9.0",
        cefrLevel: "C2",
        id: "25CO501000MELF001A",
      },
    ],
  },
  {
    name: "German",
    proficiency: "Elementary",
  },
];