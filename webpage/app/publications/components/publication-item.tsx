import type { Publication } from "@/types"
import { formatAuthors } from "../utils"
import { PublicationButtons } from "./publication-buttons"
import { FileText } from "lucide-react"

interface PublicationItemProps {
  publication: Publication
}

export function PublicationItem({ publication }: PublicationItemProps) {
  return (
    <div className="border rounded-lg p-6 space-y-4">
      <div className="space-y-3">
        <div className="flex items-start gap-3">
          <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
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
        </div>

        <PublicationButtons publication={publication} />
      </div>
    </div>
  )
}


