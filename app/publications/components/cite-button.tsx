"use client"

import { useState } from "react"
import { Copy, Download, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/hooks/use-toast"
import type { Publication } from "@/types"
import { GreenButton } from "@/components/green-button"

interface CiteButtonProps {
  publication: Publication
}

export function CiteButton({ publication }: CiteButtonProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { toast } = useToast()

  const generateLatexCitation = () => {
    const authors = publication.authors
      .map(author => author.name)
      .join(" and ")
    
    const citationKey = `${publication.authors[0]?.name.split(' ').pop()?.toLowerCase() || 'unknown'}${publication.year}`
    
    return `\\addarticle{${citationKey}}{${authors}}{${publication.title}}{${publication.description}}{${publication.institution}}{${publication.year}}`
  }

  const generateBibEntry = () => {
    const authors = publication.authors
      .map(author => author.name)
      .join(" and ")
    
    const citationKey = `${publication.authors[0]?.name.split(' ').pop()?.toLowerCase() || 'unknown'}${publication.year}`
    
    return `@article{${citationKey},
  title={${publication.title}},
  author={${authors}},
  journal={${publication.description}},
  institution={${publication.institution}},
  year={${publication.year}},
  ${publication.url ? `url={${publication.url}},` : ''}
}`
  }

  const handleCopy = async () => {
    const latexCode = generateLatexCitation()
    try {
      await navigator.clipboard.writeText(latexCode)
      toast({
        title: "Copied to clipboard",
        description: "LaTeX citation code copied successfully",
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
    const bibContent = generateBibEntry()
    const blob = new Blob([bibContent], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${publication.title.replace(/[^a-zA-Z0-9]/g, '_')}.bib`
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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10">
          <FileText className="mr-2 h-4 w-4" />
          Cite
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Cite</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium mb-2">LaTeX Citation:</h4>
            <div className="bg-muted p-4 rounded-lg">
              <code className="text-sm font-mono break-all">
                {generateLatexCitation()}
              </code>
            </div>
          </div>
          
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
        </div>
      </DialogContent>
    </Dialog>
  )
} 