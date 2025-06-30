import { UNIANDES } from "./constants";
import type { Hideable, Location } from "./types";

export type WorkMode = 'remote' | 'onsite' | 'hybrid';
type EmploymentType = 'full-time' | 'part-time' | 'contract' | 'internship';

export interface WorkExperience extends Location, Hideable {
  title: string;
  team?: string;
  squad?: string;
  organization: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
  workMode: WorkMode;
  employmentType: EmploymentType;
  isCurrent: boolean;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Software Engineer",
    team: "Parsing",
    organization: "Canals AI",
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: new Date("2024-12-09T12:00:00-05:00"),
    description: "Engineer AI-powered systems to parse diverse order formats (emails, PDFs, spreadsheets, images, handwritten documents) from wholesale distributors into structured product data.",
    technologies: [
      "TypeScript",
      "Fastify",
      "Svelte",
      "AWS (RDS, ECS)",
      "Redis",
      "SQL",
      "PostgreSQL",
      "Anthropic",
      "OpenAI"
    ],
    responsibilities: [
      "Specialize on the highlighting system, which visually maps parsed products to their origin in source documents through coordinate mapping, DOM traversal, and string comparison",
      "Design and optimize text extraction algorithms and table parsing logic for complex document layouts, often handwritten, including side-by-side multi-table orders within images, spreadsheets, and formats like MSG, EML, TIFF, and DOCX",
      "Enhance parsing accuracy through LLM prompt engineering and caching, model fine-tuning, fallback strategies, and specialized logic for industry-specific jargon",
      "Collaborate across Core and Matching teams to ensure integration between parsing results and downstream processes"
    ],
    achievements: [
      "Designed and implemented a highlighting system using DOM traversal which allows for accurate highlighting of side-by-side products in spreadsheets and tables. Formerly, side-by-side products were incorrectly highlighted as a single block spanning the entire row instead of as separate items.",
      "Designed and implemented a coordinate-mapping system for OCR data that enables precise highlighting of individual products in scanned documents (images, PDFs), particularly handwritten orders",
      "Reduced the overall number of highlighting errors reported weekly by approximately 2/3 in my first OKR period",
      "Implemented caching system for highlighted HTML and LLM prompt responses, improving system performance and reducing API costs",
      "Developed prompt reliability improvements including re-run logic for skipped products",
      "Implemented monitoring dashboards to track parsing performance",  // Add Hex here once we have it
      "Improved developer QOL by enhancing automation scripts and E2E testing logic"
    ],
    workMode: "remote",
    employmentType: "full-time",
    isCurrent: true,
  },
  {
    title: "Full-Stack Developer",
    team: "Vice Dean's Office of Student Affairs",
    startDate: new Date("2024-02-15T12:00:00-05:00"),
    endDate: new Date("2025-07-31T12:00:00-05:00"),
    description: "Built a full-stack comprehensive student data system for the Universidad de los Andes, which allowed the university to discontinue an external student counseling platform, saving approximately 100M COP ($20K USD) annually",  // TODO: Verify money
    technologies: [
      "Python",
      "Polars",
      "FastAPI",
      "TypeScript",
      "React (MUI)",
      "SQL",
      "PostgreSQL",
      "Coolify",
      "Docker",
      "Firebase",
    ],
    responsibilities: [
      "Design and build from scratch a backend system (Python, Polars, FastAPI) to process and expose comprehensive student data through REST API endpoints",
      "Extend a web application (TypeScript, React, MUI) with an independent module that allows for advanced filtering capabilities, role-based access controls for faculty and administrative staff, and the Student Profile—a suite of interactive dashboards displaying comprehensive student data that allowed for data-driven decision-making",
      "Architect and manage cross-VM communication systems for real-time data synchronization and system integration",
      "Ensure code quality and system reliability through containerization, continuous integration, and monitoring tools",
      "Design and co-implemented a comprehensive risk detection system that identifies academic and personal risk patterns in students and alerts relevant stakeholders for timely intervention"
    ],
    achievements: [
      "The backend system ultimately fed 3 distinct university services through a unified REST API",
      "The advanced student search and filtering system enabled the university to discontinue an external student counseling platform, saving approximately 100M COP ($20K USD) annually",  // TODO: Verify money
      "Co-implemented a risk detection system that identified imminent academic and personal risk patterns in students. It successfully alerted relevant stakeholders on 1000+ critical cases" // TODO: Verify numbers
    ],
    workMode: "onsite",
    employmentType: "contract",
    isCurrent: false,
    isHidden: true,
    ...UNIANDES,
  },
  {
    title: "Software Developer I",
    organization: "Caseware International Inc.",
    team: "Data Analytics",
    squad: "Notebook Ninjas",
    city: "Toronto",
    state: "ON",
    country: "Canada",
    startDate: new Date("2024-01-15T12:00:00-05:00"),
    endDate: new Date("2024-07-12T12:00:00-05:00"),
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
    employmentType: "internship",
    isCurrent: false,
  },
  {
    title: "Backend Developer",
    team: "Engineering Dean's Office",
    startDate: new Date("2023-08-21T12:00:00-05:00"),
    endDate: new Date("2023-12-09T12:00:00-05:00"),
    description: "Backend developer on the Professors' Portfolio project, a web application for managing faculty academic and administrative information, under Prof. José Bocanegra, Ph.D.",
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "Oracle SQL Developer",
    ],
    responsibilities: [
      "Engaged in design and documentation phases of the project's backend architecture",
      "Implemented persistence, logic, and control layers using Java and Spring framework",
      "Devised efficient methods for migrating large volumes of unstructured data into relational databases"
    ],
    workMode: "onsite",
    employmentType: "contract",
    isCurrent: false,
    ...UNIANDES,
  }
]
