import type { Publication } from "@/types"
import { formatAuthors } from "../utils"
import { PublicationButtons } from "./publication-buttons"

interface PublicationItemProps {
  publication: Publication
}

export function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="space-y-3">
        <p className="text-base leading-relaxed">
          <span
            dangerouslySetInnerHTML={{
              __html: formatAuthors(publication.authors).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
            }}
          />
          {" "}
          ({publication.year}). 
          {" "}
          "{publication.title}". 
          {" "}
          <em>{publication.description}</em>. 
          {" "}
          {publication.institution}.
        </p>

        <PublicationButtons publication={publication} />
      </div>
    </div>
  )
}


