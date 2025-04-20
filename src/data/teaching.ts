import type { Location, Course, Period, Hideable, MonthYear } from "./types";

// UTA = Undergraduate Teaching Assistant;
// URTA = Undergraduate Research Teaching Assistant;
type TeachingRole = "UTA" | "URTA" | "Tutor" | "Lab Assistant" | "Grader";

export function getFullTeachingRoleName(role: Teaching['role']): string {
  const roleNames = {
    'UTA': 'Undergraduate Teaching Assistant',
    'URTA': 'Undergraduate Research Teaching Assistant',
    'Tutor': 'Tutor',
    'Lab Assistant': 'Laboratory Assistant',
    'Grader': 'Grader'
  };
  return roleNames[role];
}

export interface Teaching extends Location, Hideable {
  role: TeachingRole;
  course?: Course;
  department?: string;
  institution: string;

  period?: Period;
  startDate?: MonthYear;
  endDate?: MonthYear;

  supervisor?: string;
  responsibilities: string[];
  isCurrent?: boolean;
}

export const TEACHING: Teaching[] = [
  {
    role: "URTA",
    course: {
      name: "CupiTaller (university's programming support center)",
      originalName: "CupiTaller",
      code: "VICE-3001",
    },
    department: "Systems and Computing Engineering",
    institution: "University of the Andes",
    startDate: "Aug, 2022",
    endDate: "Dec, 2024",
    supervisor: "Prof. Eduardo Rosales, Ph.D.",
    responsibilities: [
      "Designed and co-built CupiHorarios, a scheduling web app (FastAPI, React.js) using Pyomo to generate optimal schedules for the 7-person team to have full coverage of the help center's operational hours",
      "Led the design, development, and maintenance of CupiFeedback, a performance feedback web app (FastAPI, React.js) for tutors based on student surveys",
      "Collaborated in the design and development of CupiMonitores, a web app (NestJS, Next.js) for university-wide TA grading and management",
      "Conducted tutor candidate interviews",
      "Created programming problem sets and automated solution verification for Senecode, the University's coding problems website",
      "Maintained a TypeScript-based Discord bot to automatize remote tutoring tracking",
      "Managed schedules for ~40 tutors and ~70 TAs, overseeing a system that enabled 1500+ students to book sessions",
      "Managed the “Programming in Python” and “Introduction to Object Oriented Programming in Java” courses, offered publicly by the University of the Andes on Coursera",
    ],
    isCurrent: true,
    city: "Bogotá",
    country: "Colombia",
  },
  {
    role: "UTA",
    course: {
      name: "Vector Calculus",
      originalName: "Cálculo Vectorial",
      code: "MATE-1207",
      credits: 3,
    },
    department: "Mathematics",
    institution: "University of the Andes",
    period: "Summer 2024",
    supervisor: "Prof. Jacinto Puig, Ph.D.",
    responsibilities: [
      "Designed, corrected, and graded vector calculus problem sets",
      "Held weekly office hours to assist students with course material and address questions",
      "Organized comprehensive pre-exam review sessions, emphasizing clarity on key concepts",
    ],
    isCurrent: false,
    city: "Bogotá",
    country: "Colombia",
  },
  {
    role: "Tutor",
    course: {
      name: "CupiTaller",
      originalName: "CupiTaller",
      code: "ISIS-1211",
    },
    department: "Systems and Computing Engineering",
    institution: "University of the Andes",
    period: "Spring 2022",
    responsibilities: [
      "Conducted daily Python tutoring sessions",
      "Assisted more than 100 students in understanding programming concepts",
    ],
    isCurrent: false,
    city: "Bogotá",
    country: "Colombia",
  },
  {
    role: "UTA",
    course: {
      name: "Introduction to Programming",
      originalName: "Introducción a la Programación",
      code: "ISIS-1221",
      credits: 3,
    },
    department: "Systems and Computing Engineering",
    institution: "University of the Andes",
    period: "Spring 2021",
    supervisor: "Prof. Diego Salinas",
    responsibilities: [
      "Provided support to the professor during programming teaching laboratories, assisting ~40 students",
      "Corrected and graded basic programming projects",
    ],
    isCurrent: false,
    city: "Bogotá",
    country: "Colombia",
  },
  {
    role: "Grader",
    course: {
      name: "Differential Calculus",
      originalName: "Cálculo Diferencial",
      code: "MATE-1203",
      credits: 3,
    },
    department: "Mathematics",
    institution: "University of the Andes",
    period: "Spring 2021",
    supervisor: "Prof. Alexander Murcia, Ph.D.",
    responsibilities: [
      "Corrected and graded differential calculus worksheets and assessments",
    ],
    isCurrent: false,
    city: "Bogotá",
    country: "Colombia",
  },
];
