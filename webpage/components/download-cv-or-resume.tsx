import { Download } from "lucide-react"
import { GreenButton } from "./green-button"

export function DownloadCVOrResume() {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
        <DownloadButton name="CV" />
        <DownloadButton name="Resume" />
      </div>
  )
}

function DownloadButton({ name }: { name: string }) {
  return (
    <GreenButton>
      <Download className="h-full w-full text-primary" />
      {name}
    </GreenButton>
  )
}