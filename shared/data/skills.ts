import type { Skill } from "../schemas/skill";

export const SKILLS: Skill[] = [
  {
    category: "Programming Languages",
    skills: ["TypeScript", "Python", "Rust", "Java", "Swift"],
  },
  {
    category: "Data & Databases",
    skills: ["Polars", "SQL", "Plotly", "Jupyter", "Hex", "PostgreSQL", "Redis", "Oracle SQL Developer"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS (RDS, ECS, S3, DynamoDB)", "Docker", "Coolify", "GitHub CI/CD"],
  },
  {
    category: "Web Technologies",
    skills: ["React", "Svelte", "Next.js", "FastAPI", "Fastify", "Spring Boot", "HTML", "CSS", "MUI", "ShadCN"],
  },
  {
    category: "AI/ML",
    skills: [ "TensorFlow", "PyTorch", "Anthropic API", "OpenAI API", "Groq API", "Gemini API"],
  },
  {
    category: "Other",
    skills: ["LaTeX", "Git", "Bash", "Linux", "Firebase"],
  },
]; 