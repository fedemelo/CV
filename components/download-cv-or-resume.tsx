import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

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
    <Button variant="outline" size="lg" className="hover:border-primary/90 hover:bg-primary/10">
      <Download className="mr-2 h-5 w-5" />
      Download {name}
    </Button>
  )
}