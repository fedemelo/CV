"use client"

import { useState } from "react"
import { SiLatex } from "react-icons/si"
import { GreenButton } from "@/components/green-button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import type { Publication } from "@/types"
import { CitationDisplay } from "./citation-display"
import { CitationActions } from "./citation-actions"

interface CiteButtonProps {
  publication: Publication
}

export function CiteButton({ publication }: CiteButtonProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <GreenButton asChild tooltip="Generate BibTeX citation">
          <button className="flex items-center">
            <SiLatex className="h-4 w-4" />
            Cite
          </button>
        </GreenButton>
      </DialogTrigger>
      <DialogContent className="max-w-[95vw] sm:max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Cite</DialogTitle>
          <DialogDescription>
            Copy or download the BibTeX citation for this publication
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4">
          <CitationDisplay publication={publication} />
          <CitationActions publication={publication} />
        </div>
      </DialogContent>
    </Dialog>
  )
} 