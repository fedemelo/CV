import { UNIANDES } from "./constants";
import type { WorkExperience } from "../../api/schemas/workExperience";

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
      "Anthropic API",
      "OpenAI API",
      "Groq API",
      "Gemini API",
      "Hex",
      "Polars",
      "Plotly",
      "ClickUp",
    ],
    responsibilities: [
      "Build highlighting systems using DOM traversal, coordinate mapping, and string comparison to visually map parsed products to source documents",
      "Develop text extraction algorithms and table parsing logic for complex layouts including handwritten documents, side-by-side tables, and formats like MSG, EML, TIFF, DOCX",
      "Optimize parsing accuracy through LLM prompt engineering, caching, model fine-tuning, and industry-specific logic",
    ],
    achievements: [
      "Built DOM traversal highlighting system enabling accurate side-by-side product highlighting in spreadsheets and tables",
      "Implemented coordinate-mapping system for precise OCR data highlighting in scanned documents",
      "Reduced weekly highlighting errors by 2/3 in first OKR period",
      "Created monitoring dashboards (Polars, Plotly) to monitor parsing performance, which eventually scaled to monitor all Canals' teams",
      "Developed prompt reliability improvements with validation and re-run logic",
      "Enhanced developer experience through automation scripts and E2E testing improvements"
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
    description: "Built a full-stack student data system for the Universidad de los Andes, which allowed the university to discontinue an external student counseling platform, saving approximately 100M COP (~$25K USD) annually",  // TODO: Verify money
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
      "Design and build a backend system (Python, Polars, FastAPI) to process and expose student data through REST API endpoints",
      "Extend a web application (TypeScript, React, MUI) with an independent module with advanced filtering capabilities, role-based access control, and a suite of interactive dashboards displaying student data",
      "Architect and manage cross-VM communication systems",
    ],
    achievements: [
      "The backend system ultimately fed 3 distinct university services through a unified REST API",
      "The advanced student search and filtering system enabled the university to discontinue an external student counseling platform, saving approximately 100M COP (~$25K USD) annually",  // TODO: Verify money
      "Designed and co-implemented an academic and personal risk detection system  that successfully alerted relevant stakeholders on 1000+ critical cases" // TODO: Verify numbers
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
    description: "Software Developer I at the Notebook Ninjas squad on the Data Analytics team.",
    technologies: [
      "Python",
      "Jupyter",
      "Java",
      "AWS (S3, DynamoDB)",
      "Jira"
    ],
    achievements: [
      `Recognized as part of the Data Analytics team with the June Team Award for "delivering impactful contributions and hard work"`,
    ],
    responsibilities: [
      "Develop Jupyter notebooks for financial and auditing-related data analysis",
      "Address bugs and implement optimizations in Java and TypeScript services using AWS technologies",
      "Write and deliver technical reports such as SPIKEs and RFCs"
    ],
    workMode: "remote",
    employmentType: "internship",
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
    ],
    achievements: [
      "Devised efficient methods for migrating large volumes of unstructured data into relational databases"
    ],
    workMode: "onsite",
    employmentType: "contract",
    ...UNIANDES,
  }
]
