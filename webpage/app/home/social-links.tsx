import { Github, Linkedin, Globe, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"
import type { PersonalInfo } from "@/types"
import { LucideIcon } from "lucide-react"

interface SocialLinksProps {
  personalInfo: PersonalInfo
}

export function SocialLinks({ personalInfo }: SocialLinksProps) {
  const socialLinks = [
    {
      href: `https://www.linkedin.com/in/${personalInfo.linkedInPath}`,
      icon: Linkedin,
      label: "LinkedIn",
      iconClassName: "text-blue-500",
      isExternal: true
    },
    {
      href: `https://github.com/${personalInfo.gitHubPath}`,
      icon: Github,
      label: "GitHub", 
      isExternal: true
    },
    {
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
      label: "Email",
      iconClassName: "text-primary",
      isExternal: false
    }
  ]

  return (
    <div className="flex gap-4">
      <TooltipProvider delayDuration={0}>
        {socialLinks.map(({ href, icon, label, iconClassName, isExternal }) => 
          createSocialLink(href, icon, label, iconClassName, isExternal)
        )}
      </TooltipProvider>
    </div>
  )
} 

function createSocialLink(
  href: string,
  Icon: LucideIcon,
  label: string,
  iconClassName?: string,
  isExternal = false
) {
  const linkProps = isExternal 
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {}

  return (
    <Tooltip key={label}>
      <TooltipTrigger asChild>
        <Button variant="outline" className="rounded-full w-9 h-9" asChild>
          <Link href={href} {...linkProps}>
            <Icon className={`${iconClassName}`} />
          </Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  )
}