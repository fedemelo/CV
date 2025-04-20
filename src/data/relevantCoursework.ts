export interface RelevantCoursework {
  area: string;
  courses: string[];
}

export const RELEVANT_COURSEWORK: RelevantCoursework[] = [
  {
    area: "Mathematics",
    courses: [
      "Graph Theory",
      "Game Theory",
      "Computational Methods",
      "Structural Mathematics",
      "Probability and Statistics",
      "Linear Algebra",
      "Calculus I, II, III",
    ]
  },
  {
    area: "Computer Science",
    courses: [
      "Reinforcement Learning",
      "Languages and Automata",
      "Modeling, Simulation and Optimization",
      "Algorithm Design and Analysis",
      "Data Structures and Algorithms",
    ],
  },
  {
    area: "Software Engineering",
    courses: [
      "Software Metrics and Quality",
      "Software Architecture and Design",
      "Web Technologies Programming",
      "API Design and Construction",
      "Team Software Development",
      "Transactional Systems",
    ],
  }
];

