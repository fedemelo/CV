import { CitationGenerator } from "./citation-generator"
import type { Publication } from "@/types"

interface CitationDisplayProps {
  publication: Publication
}

export function CitationDisplay({ publication }: CitationDisplayProps) {
  const citationGenerator = new CitationGenerator(publication)
  const bibTexCitation = citationGenerator.generateBibTeX()

  return (
    <div>
      <h4 className="text-sm font-medium mb-2">BibTeX Citation:</h4>
      <div className="bg-muted p-3 sm:p-4 rounded-lg w-full overflow-hidden">
        <pre className="text-xs sm:text-sm font-mono whitespace-pre-wrap break-words break-all w-full overflow-wrap-anywhere">
          {bibTexCitation}
        </pre>
      </div>
    </div>
  )
} 