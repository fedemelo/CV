export interface Extracurricular {
  description: string;
  events: {
    title: string;
  }[];
}

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    description: "National-level swimmer",
    events: [
      {
        title:
          "Universidad de los Andes Swimming Team member and Captain, 4-time Bogotá City Swimming Team member, 12 National Swimming Championships",  // 12: 4 Interligas, 4 Interclubes, 3 ASCUN, 1 Cerros
      },
    ],
  },
];
