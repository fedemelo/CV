import { Download } from "lucide-react"
import { GreenButton } from "./green-button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function DownloadCVOrResume() {
  return (
    <TooltipProvider delayDuration={0}>
      <div className="flex flex-col sm:flex-row gap-4">
        <DownloadButton name="CV" />
        <DownloadButton name="Resume" />
      </div>
    </TooltipProvider>
  )
}

function DownloadButton({ name }: { name: string }) {
  const tooltipText = name === "CV" ? "Download my CV as PDF" : "Download my resume as PDF"
  
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <GreenButton>
          <Download className="h-full w-full text-primary" />
          {name}
        </GreenButton>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  )
}