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
          "8 National Swimming Championships & 4-time Bogotá City Team member",
        startYear: 2016,
        endYears: 2019,
      },
      {
        title:
          "Swimming Team member at the University of the Andes, earning 41 medals, 24 gold",
        startYear: 2020,
        endYears: 2024,
      },
      {
        title:
          "Democratically elected Captain of the Swimming Team for two consecutive years",
        startYear: 2022,
        endYears: 2024,
      },
    ],
  },
];
