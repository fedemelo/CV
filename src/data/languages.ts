import type { Language } from "../../api/schemas/language";

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
        showInCV: false,
        showInResume: false,
      },
      {
        name: "TOEFL",
        date: new Date("2020-02-02T12:00:00-05:00"),
        grade: "110/120",
        cefrLevel: "C1",
        id: "7824 1022 0180 2567",
        showInCV: false,
        showInResume: false,
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