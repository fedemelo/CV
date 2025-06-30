import { UNIANDES } from "./constants";
import type { Location, Course, Hideable } from "./types";

// UTA = Undergraduate Teaching Assistant;
// URTA = Undergraduate Research Teaching Assistant;
type TeachingRole = "UTA" | "URTA" | "Tutor" | "Grader" | "Lecturer";

export function getFullTeachingRoleName(role: Teaching['role']): string {
  const roleNames = {
    'UTA': 'Undergraduate Teaching Assistant',
    'URTA': 'Undergraduate Research Teaching Assistant',
    'Tutor': 'Tutor',
    'Grader': 'Grader',
    'Lecturer': 'Lecturer'
  };
  return roleNames[role];
}

export interface Teaching extends Location, Hideable {
  role: TeachingRole;
  course?: Course;
  department?: string;
  organization: string;

  description?: string;

  startDate?: Date;  // Dates are registered merely for historical reasons
  endDate?: Date;

  supervisor?: string;
  responsibilities?: string[];
  achievements?: string[];
  isCurrent?: boolean;
}

export const TEACHING: Teaching[] = [
  {
    role: "Lecturer",
    course: {
      name: "Introduction to Programming",
      originalName: "Introducción a la Programación",
      code: "ISIS-1221",
    },
    department: "Systems and Computing Engineering",
    // startDate: 
    // endDate: 
    isCurrent: true,
    isHidden: true,  // Soon enough!
    ...UNIANDES,
  },
  {
    role: "URTA",
    course: {
      name: "CupiTaller",
      originalName: "CupiTaller",
      code: "VICE-3001",
      credits: 6,
    },
    department: "Systems and Computing Engineering",
    startDate: new Date("2022-08-08T12:00:00-05:00"),
    endDate: new Date("2024-12-07T12:00:00-05:00"),
    supervisor: "Prof. Eduardo Rosales, Ph.D.",
    description: "Collaborated in a 7-person team under Prof. Eduardo Rosales, Ph.D., to manage the university's programming support center",
    responsibilities: [
      "Conducted tutor candidate interviews",
      "Created programming problem sets and automated solution verification",  // Senecode
      "Maintained a TypeScript-based Discord bot to automatize remote tutoring tracking",
      "Managed schedules for ~40 tutors and ~70 TAs, overseeing a system that enabled 1500+ students to book sessions",
      "Oversaw the university's Coursera courses “Programming in Python” and “Introduction to Object Oriented Programming in Java”",
    ],
    achievements: [
      "Designed and co-built CupiHorarios, a scheduling web app (FastAPI, Pyomo, React) to generate optimal schedules ensuring full coverage during operational hours",
      "Co-designed and co-built CupiFeedback, a performance feedback web app (FastAPI, React) based on student surveys",
      "Co-designed CupiMonitores, a web app for university-wide TA grading and management",
    ],
    isCurrent: false,
    ...UNIANDES,
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
    startDate: new Date("2024-06-04T12:00:00-05:00"),
    endDate: new Date("2024-07-26T12:00:00-05:00"),
    supervisor: "Prof. Jacinto Puig, Ph.D.",
    description: "Designed and graded problem sets, and held weekly office hours under Professor Jacinto Puig, Ph.D.",
    isCurrent: false,
    ...UNIANDES,
  },
  {
    role: "Tutor",
    course: {
      name: "CupiTaller",
      originalName: "CupiTaller",
      code: "ISIS-1211",
    },
    department: "Systems and Computing Engineering",
    startDate: new Date("2022-02-01T12:00:00-05:00"),
    endDate: new Date("2022-06-04T12:00:00-05:00"),
    description: "Conducted daily Python tutoring sessions assisting ~100 students at the university's programming support center",
    isCurrent: false,
    ...UNIANDES,
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
    startDate: new Date("2021-02-01T12:00:00-05:00"),
    endDate: new Date("2021-06-05T12:00:00-05:00"),
    supervisor: "Prof. Diego Salinas",
    description: "Assisted ~40 students during Python programming laboratories and graded programming projects",
    isCurrent: false,
    ...UNIANDES,
  },
  {
    role: "UTA",
    course: {
      name: "Differential Calculus",
      originalName: "Cálculo Diferencial",
      code: "MATE-1203",
      credits: 3,
    },
    department: "Mathematics",
    startDate: new Date("2021-01-25T12:00:00-05:00"),
    endDate: new Date("2021-05-29T12:00:00-05:00"),
    supervisor: "Prof. Alexander Murcia, Ph.D.",
    description: "Graded calculus worksheets",
    isCurrent: false,
    ...UNIANDES,
  },
];
