import type { Author } from "@/types"

export function formatAuthors(authors: Author[]): string {
  return authors.map((author) => (author.isUser ? `**${author.name}**` : author.name)).join(", ")
} 