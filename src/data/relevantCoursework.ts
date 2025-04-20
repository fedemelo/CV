import type { Course } from "./types";

export interface RelevantCoursework {
  area: string;
  courses: Course[];
}

export const RELEVANT_COURSEWORK: RelevantCoursework[] = [
  {
    area: "Mathematics",
    courses: [
      {
        name: "Graph Theory",
        originalName: "Teoría de Grafos",
        code: "MATE-1104",
        credits: 3
      },
      {
        name: "Game Theory",
        originalName: "Teoría de Juegos",
        code: "MATE-3712",
        credits: 3
      },
      {
        name: "Computational Methods",
        originalName: "Métodos Computacionales 1",
        code: "FISI-2526",
        credits: 3
      },
      {
        name: "Structural Mathematics",
        originalName: "Matemática Estructural",
        code: "MATE-1102",
        credits: 3
      },
      {
        name: "Probability and Statistics",
        originalName: "Probabilidad y Estadística 1",
        code: "IIND-2106",
        credits: 3
      },
      {
        name: "Linear Algebra",
        originalName: "Álgebra Lineal 1",
        code: "MATE-1105",
        credits: 3
      },
      {
        name: "Calculus I, II, III",
        originalName: "Cálculo Diferencial, Cálculo Integral y Cálculo Vectorial",
        code: "MATE-1203/1214/1207",
        credits: 3
      }
    ]
  },
  {
    area: "Computer Science",
    courses: [
      {
        name: "Reinforcement Learning",
        code: "ISIS-4222",
        credits: 4
      },
      {
        name: "Languages and Automata",
        originalName: "Lenguajes y Máquinas",
        code: "ISIS-1106",
        credits: 3
      },
      {
        name: "Modeling, Simulation and Optimization",
        originalName: "Modelado, Simulación y Optimización",
        code: "ISIS-3302",
        credits: 3
      },
      {
        name: "Algorithm Design and Analysis",
        originalName: "Diseño y Análisis de Algoritmos",
        code: "ISIS-1105",
        credits: 3
      },
      {
        name: "Data Structures and Algorithms",
        originalName: "Estructuras de Datos y Algoritmos",
        code: "ISIS-1225",
        credits: 3
      }
    ]
  },
  {
    area: "Software Engineering",
    courses: [
      {
        name: "Software Metrics and Quality",
        originalName: "Métricas y Calidad de Software",
        code: "MISW-4404",
        credits: 2
      },
      {
        name: "Software Architecture and Design",
        originalName: "Arquitectura y Diseño de Software",
        code: "ISIS-2503",
        credits: 3
      },
      {
        name: "Web Technologies Programming",
        originalName: "Programación con Tecnologías Web",
        code: "ISIS-3710",
        credits: 3
      },
      {
        name: "API Design and Construction",
        originalName: "Diseño y Construcción de APIs",
        code: "MISW-4403",
        credits: 2
      },
      {
        name: "Team Software Development",
        originalName: "Desarrollo de Software en Equipo",
        code: "ISIS-2603",
        credits: 3
      },
      {
        name: "Transactional Systems",
        originalName: "Sistemas Transaccionales",
        code: "ISIS-2304",
        credits: 3
      }
    ]
  }
];