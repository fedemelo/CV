import type { Publication } from "@/types"

export class CitationGenerator {
  private publication: Publication

  constructor(publication: Publication) {
    this.publication = publication
  }

  generateCitationKey(): string {
    const firstAuthorLastName = this.publication.authors[0]?.name
      .split(' ')
      .pop()
      ?.toLowerCase()
      .replace(/[^a-z]/g, '') || 'unknown'
    
    return `${firstAuthorLastName}${this.publication.year}`
  }

  generateAuthors(): string {
    return this.publication.authors
      .map(author => author.name)
      .join(' and\n')
  }

  generateBibTeX(): string {
    const citationKey = this.generateCitationKey()
    const authors = this.generateAuthors()
    
    const fields = [
      `author = {${authors}}`,
      `title = {${this.publication.title}}`,
      `journal = {${this.publication.description}}`,
      `institution = {${this.publication.institution}}`,
      `year = {${this.publication.year}}`
    ]

    if (this.publication.url) {
      fields.push(`url = {${this.publication.url}}`)
    }

    if (this.publication.pdfUrl) {
      fields.push(`pdf = {${this.publication.pdfUrl}}`)
    }

    // Add location information if available
    if (this.publication.city || this.publication.country) {
      const location = [
        this.publication.city,
        this.publication.state,
        this.publication.country
      ].filter(Boolean).join(', ')
      
      if (location) {
        fields.push(`address = {${location}}`)
      }
    }

    const fieldsString = fields
      .map(field => ` ${field}`)
      .join(',\n')

    return `@article{${citationKey},\n${fieldsString}\n}`
  }

  generateFilename(): string {
    return `${this.publication.title.replace(/[^a-zA-Z0-9]/g, '_')}.bib`
  }
} 