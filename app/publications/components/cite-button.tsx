"use client"

import { useState } from "react"
import { FileText } from "lucide-react"
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

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10">
          <FileText className="mr-2 h-4 w-4" />
          Cite
        </Button>
      </DialogTrigger>
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