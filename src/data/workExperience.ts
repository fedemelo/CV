import type { MonthYear } from "./types";

export type WorkMode = 'remote' | 'onsite' | 'hybrid';
type EmploymentType = 'full-time' | 'part-time' | 'contract';

export interface WorkExperience {
  title: string;
  company: string;
  city: string;
  state?: string;
  country?: string;
  startDate: MonthYear;
  endDate?: MonthYear;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
  workMode: WorkMode;
  employmentType: EmploymentType;
  isCurrent: boolean;
  isHidden?: boolean;
  isInternship?: boolean;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Software Engineer",
    company: "Canals AI",
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: "Dec, 2024",
    description: "Software Engineer on the Parsing team, working on an AI-powered system that interprets diverse wholesale distributors' order formats (emails, PDFs, spreadsheets, images, and handwritten documents) into accurate and structured product data.",
    technologies: [
      "TypeScript",
      "Fastify",
      "Svelte",
      "AWS (RDS, ECS)",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Anthropic",
      "OpenAI"
    ],
    responsibilities: [
      "Specialize on the highlighting system, which visually maps parsed products to their origin in source documents through coordinate mapping, DOM traversal, and string comparison",
      "Design and optimize text extraction algorithms and table parsing logic for complex document layouts, often handwritten, including side-by-side multi-table products within images, spreadsheets, and specialized formats like MSG, EML, and DOCX",
      "Enhance parsing accuracy through LLM prompt engineering, model fine-tuning, and specialized logic for industry-specific products and jargon",
      "Implement organization-specific monitoring dashboards to track parsing performance",
      "Collaborate across Core and Matching teams to ensure integration between parsing results and downstream processes"
    ],
    achievements: [
      "Designed and implemented a new highlighting system using DOM traversal which allowed for accurate highlighting of side-by-side products in spreadsheets and tables. Formerly, side-by-side products were incorrectly highlighted as a single block spanning the entire row instead of as separate items.",
      "Designed and implemented a coordinate-mapping system for OCR data that enables precise highlighting of individual products in scanned documents (images, PDFs), particularly handwritten orders",
      "Reduced the overall number of highlighting errors reported weekly by approximately 2/3",
      "Improved developer QOL by enhancing automation scripts and E2E testing logic"
    ],
    workMode: "remote",
    employmentType: "full-time",
    isCurrent: true,
  },
  {
    title: "Software Engineer",
    company: "Universidad de los Andes",
    city: "Bogotá",
    country: "Colombia",
    startDate: "May, 2025",
    endDate: "Jul, 2025",
    description: "Software Engineer at the Universidad de los Andes",
    technologies: [
      "Python",
      "FastAPI",
      "TypeScript",
      "React",
      "PostgreSQL",
      "Coolify",
      "Docker",
      "Firebase",
    ],
    responsibilities: [""],  // TODO: Add responsibilities
    achievements: [""], // TODO: Add achievements
    workMode: "onsite",
    employmentType: "contract",
    isCurrent: false,
    isHidden: true,
  },
  {
    title: "Software Developer I",
    company: "Caseware International Inc.",
    city: "Toronto",
    state: "ON",
    country: "Canada",
    startDate: "Jan, 2024",
    endDate: "Jul, 2024",
    description: "Software Developer I at the Notebook Ninjas squad on the Data Analytics team.",
    technologies: [
      "Python",
      "Jupyter",
      "Java",
      "AWS (S3, DynamoDB)"
    ],
    achievements: [
      `Recognized as part of the Data Analytics team with the June Team Award for "delivering impactful contributions and hard work"`,
    ],
    responsibilities: [
      "Contribute to developing Python Jupyter notebooks and Java microservices for financial and auditing-related data analysis",
      "Address bugs and implemented optimizations in Java and TypeScript services",
      "Leverage AWS S3 Buckets and DynamoDB for data storage and configuration management",
      "Engage in the full software development lifecycle, including collaborating on SPIKEs and RFCs, managing Jira tickets, and participating in the implementation, testing, and review of pull requests"
    ],
    workMode: "remote",
    employmentType: "full-time",
    isInternship: true,
    isCurrent: false,
  }
]
