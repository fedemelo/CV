import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"

export function Header() {
  return (
    <div className="text-center space-y-6">
      <h1 className="text-4xl md:text-5xl font-bold">Academic Experience</h1>

      {/* Download Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-primary hover:bg-primary/90">
          <Download className="mr-2 h-5 w-5" />
          Download CV
        </Button>
        <Button variant="outline" size="lg">
          <Download className="mr-2 h-5 w-5" />
          Download Resume
        </Button>
      </div>
    </div>
  )
} 