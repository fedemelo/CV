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
      <Download className="mr-2 h-5 w-5" />
      Download {name}
    </GreenButton>
  )
}