import { Github, Linkedin, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { PersonalInfo } from "@/types"

interface SocialLinksProps {
  personalInfo: PersonalInfo
}

export function SocialLinks({ personalInfo }: SocialLinksProps) {
  return (
    <div className="flex flex-wrap gap-4">
      <Button variant="outline" size="lg" asChild>
        <Link href={`https://www.linkedin.com/in/${personalInfo.linkedInPath}`} target="_blank" rel="noopener noreferrer">
          <Linkedin className="mr-2 h-5 w-5" />
          LinkedIn
        </Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href={`https://github.com/${personalInfo.gitHubPath}`} target="_blank" rel="noopener noreferrer">
          <Github className="mr-2 h-5 w-5" />
          GitHub
        </Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href={`mailto:${personalInfo.email}`}>
          <Mail className="mr-2 h-5 w-5" />
          Email
        </Link>
      </Button>
    </div>
  )
} 