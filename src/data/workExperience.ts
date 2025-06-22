import type { Hideable, Location, MonthYear } from "./types";

export type WorkMode = 'remote' | 'onsite' | 'hybrid';
type EmploymentType = 'full-time' | 'part-time' | 'contract';

export interface WorkExperience extends Location, Hideable {
  title: string;
  team?: string;
  squad?: string;
  company: string;
  startDate: MonthYear;
  endDate?: MonthYear;
  description: string;
  technologies: string[];
  responsibilities: string[];
  achievements?: string[];
  workMode: WorkMode;
  employmentType: EmploymentType;
  isCurrent: boolean;
  isInternship?: boolean;
}

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    title: "Software Engineer",
    team: "Parsing",
    company: "Canals AI",
    city: "Coral Gables",
    state: "FL",
    country: "USA",
    startDate: "Dec, 2024",
    description: "Build AI-powered systems to parse diverse order formats (emails, PDFs, spreadsheets, images, handwritten documents) from wholesale distributors into structured product data.",
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
    title: "Software Engineer",
    company: "Universidad de los Andes",
    team: "Vice Dean's Office of Student Affairs",
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
    responsibilities: [
      "Designed and implemented el backend del Perfil del Estudiante mediante un REST API service using FastAPI to expose student data as resources. Dicho API acabó alimentando hasta 3 servicios distintos de la Universidad.",
      "Implemented an independent React.js frontend module que permitía a profesores y administrativos filtrar a los estudiantes por prácticamente cualquier criterio, y acceder a su Perfil del Estudiante como un tablero de control interactivo con acceso controlado a informacion sensible", // TODO: Cómo hice esto eficientemente?
      "Architected cross-VM communication for continuous data updates, ensuring data and code quality through tools like Docker, Nginx, Airflow, and SonarQube"
    ],
    achievements: [
      "Los filtros de búsqueda de estudiantes y el Perfil del Estudiante permitieron a la Universidad dejar de contratar a una plataforma externa de gestión de estudiantes y consejería, representando un ahorro anual de 100M COP (USD 20K)",  // TODO: Verify money
      "Las consejerias de la Universidad migraron completamente a la nueva plataforma",
      "Co-inventé un sistema que reconoce patrones de riesgo personales o académicos en los estudiantes y lo alerta a los stakeholders correspondientes, permitiendo intervencion oportuna en casos críticos",
    ],
    workMode: "onsite",
    employmentType: "contract",
    isCurrent: false,
    isHidden: true,
  },
  {
    title: "Software Developer I",
    company: "Caseware International Inc.",
    team: "Data Analytics",
    squad: "Notebook Ninjas",
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
