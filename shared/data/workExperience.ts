import { UNIANDES } from "./constants";
import type { WorkExperience } from "../schemas/workExperience";

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Software Engineer",
    team: "Parsing",
    organization: "Canals AI",
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: new Date("2024-12-09T12:00:00-05:00"),
    description: "Parsed diverse order formats (emails, PDFs, spreadsheets, images, handwritten documents) from wholesale distributors into structured product data.",
    achievements: [
      "Built visual highlighting systems using DOM traversal, coordinate mapping, and string comparison to map parsed products to source documents, reducing weekly errors by 2/3 in first OKR period",
      "Improved parsing accuracy" // TODO: Get numbers on this. "by x%"
      + " and speed" // Numbers!
      + " through LLM prompt engineering, caching, model fine-tuning, and validation logic",
      "Developed text extraction algorithms for complex layouts (nested tables, side-by-side formats, schematics) supporting most file formats (PDF, DOCX, XLSX, MSG, EML, TIFF, etc.)",
      "Created performance monitoring dashboards (Polars, Plotly) for Parsing team, later scaled to monitor 3 company teams (30+ engineers overall)",
      "Built automated reliability tools that improved developer QOL and caught non-deterministic parsing failures before they reached customers",
    ],
    technologies: [
      "TypeScript",
      "Fastify",
      "Svelte",
      "AWS (RDS, ECS)",
      "Redis",
      "SQL",
      "PostgreSQL",
      "Anthropic API",
      "OpenAI API",
      "Groq API",
      "Gemini API",
      "Hex",
      "Polars",
      "Plotly",
      "ClickUp",
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
    description: "Built a full-stack student data system for the Universidad de los Andes.",
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
    achievements: [
      "Designed and built a system (Python, Polars) from scratch to process student data with advanced filters and aggregations. The system ultimately fed 3 distinct university services through a unified REST API (FastAPI)",
      "Extended a web application (TypeScript, React, MUI) with advanced filtering, report generation, dynamic graphing, and role-based access control dashboards, which served 15,000+ students and 600+ faculty and staff",
      "Enabled the university to discontinue an external student counseling platform through the advanced student analytics system, saving approximately 100M COP (~$25K USD) annually",  // TODO: Verify money
      "Designed and co-implemented an academic and personal risk detection system that successfully alerted relevant stakeholders on 1000+ critical cases", // TODO: Verify numbers
      "Architected and managed cross-VM communication systems for sensitive data, using air-gapping techniques and network management tools",
    ],
    workMode: "onsite",
    employmentType: "contract",
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
    description: "Developed data analysis solutions and optimized backend services for financial auditing workflows on the Data Analytics team.",
    technologies: [
      "Python",
      "Jupyter",
      "Java",
      "AWS (S3, DynamoDB)",
      "Jira"
    ],
    achievements: [
      "Awarded the June Team Award for 'delivering impactful contributions and hard work' as part of the Data Analytics team",
      "Developed Python-based Jupyter notebooks for financial and auditing data analysis", // TODO: Get scale of data processed, for impact
      "Optimized Java and TypeScript microservices performance using AWS S3 and DynamoDB, identifying and resolving bugs to improve system stability",
      "Authored and delivered technical reports (SPIKEs, RFCs) that influenced team architecture decisions and established best practices for data validation logic",
    ],
    workMode: "remote",
    employmentType: "internship",
  },
  {
    title: "Backend Developer",
    team: "Engineering Faculty Research Center (CIFI)",
    startDate: new Date("2023-08-21T12:00:00-05:00"),
    endDate: new Date("2023-12-09T12:00:00-05:00"),
    description: "Backend developer on the Professors' Portfolio project, a web application for managing faculty academic and administrative information.",
    technologies: [
      "Java",
      "Spring Boot",
      "SQL",
      "Oracle SQL Developer",
    ],
    achievements: [
      "Designed and implemented backend architecture for the Professors' Portfolio system (Java, Spring Boot), serving faculty members across the Engineering School",
      "Built persistence, logic, and control layers with CRUD operations, custom logic, and RESTful API endpoints",
      "Devised efficient data migration methods to store large volumes of unstructured faculty data into relational databases (Oracle SQL Developer)",
      "Collaborated with Prof. José Bocanegra, Ph.D. on system architecture documentation and technical specifications, contributing to project planning and implementation roadmaps",
    ],
    workMode: "onsite",
    employmentType: "contract",
    ...UNIANDES,
  }
]
