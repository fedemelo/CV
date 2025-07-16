"use client"

import { useState } from "react"
import { SiLatex } from "react-icons/si"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
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
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <div 
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <DialogTrigger asChild>
          <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10 flex items-center">
            <SiLatex className="h-4 w-4" />
            Cite
          </Button>
        </DialogTrigger>
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-sm text-popover-foreground bg-popover border border-border rounded-md shadow-md whitespace-nowrap z-50 animate-in fade-in-0 zoom-in-95">
            Generate BibTeX citation
          </div>
        )}
      </div>
      <DialogContent className="sm:max-w-2xl overflow-x-auto">
        <DialogHeader>
          <DialogTitle>Cite</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          <CitationDisplay publication={publication} />
          <CitationActions publication={publication} />
        </div>
      </DialogContent>
    </Dialog>
  )
} 