import { Copy, Download } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { GreenButton } from "@/components/green-button"
import { CitationGenerator } from "./citation-generator"
import type { Publication } from "@/types"

interface CitationActionsProps {
  publication: Publication
}

export function CitationActions({ publication }: CitationActionsProps) {
  const { toast } = useToast()
  const citationGenerator = new CitationGenerator(publication)

  const handleCopy = async () => {
    const bibTexCitation = citationGenerator.generateBibTeX()
    try {
      await navigator.clipboard.writeText(bibTexCitation)
      toast({
        title: "Copied to clipboard",
        description: "BibTeX citation copied successfully",
      })
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Could not copy to clipboard",
        variant: "destructive",
      })
    }
  }

  const handleDownload = () => {
    const bibTexCitation = citationGenerator.generateBibTeX()
    const filename = citationGenerator.generateFilename()
    
    const blob = new Blob([bibTexCitation], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    
    toast({
      title: "Downloaded",
      description: "BibTeX file downloaded successfully",
    })
  }

  return (
    <div className="flex justify-end space-x-2">
      <GreenButton onClick={handleCopy}>
        <Copy className="mr-2 h-4 w-4" />
        Copy
      </GreenButton>
      <GreenButton onClick={handleDownload}>
        <Download className="mr-2 h-4 w-4" />
        Download
      </GreenButton>
    </div>
  )
} 