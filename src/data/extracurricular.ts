export interface Extracurricular {
  description: string;
  events: {
    title: string;
    startYear: number;
    endYears: number;
  }[];
}

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    description: "National-level swimmer",
    events: [
      {
        title:
          "Universidad de los Andes Swimming Team member, earning 41 medals (24 gold) and serving as Captain for two years",
        startYear: 2020,
        endYears: 2024,
      },
      {
        title:
          "8 National Swimming Championships & 4-time Bogotá City Team member",
        startYear: 2016,
        endYears: 2019,
      },
    ],
  },
];
