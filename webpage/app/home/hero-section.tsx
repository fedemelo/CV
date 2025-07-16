import type { PersonalInfo } from "@/types"
import { OpenCVOrResume } from "@/components/open-cv-or-resume"
import { SocialLinks } from "./social-links"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <div className="space-y-6 lg:pt-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-7xl tracking-tight">
          {personalInfo.name}
        </h1>
        <div className="flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between">
          <OpenCVOrResume />
          <SocialLinks personalInfo={personalInfo} />
        </div>
        <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-display font-light text-justify w-full">
          Software engineer who enjoys tough problems and elegant solutions.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-base md:text-xl text-muted-foreground font-display font-light text-justify w-full">
          Currently at <a href="https://canals.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Canals AI</a>, where I parse the unparseable and build tools that think. Away from the keyboard, you'll find me in the water.
        </p>
      </div>
    </div>
  )
} 