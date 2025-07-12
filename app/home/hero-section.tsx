import type { PersonalInfo } from "@/types"

interface HeroSectionProps {
  personalInfo: PersonalInfo
}

export function HeroSection({ personalInfo }: HeroSectionProps) {
  return (
    <div className="space-y-6 pt-12">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-7xl tracking-tight">
          {personalInfo.name}
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground font-display font-light">
          Software engineer who enjoys tough problems and elegant solutions.
        </p>
      </div>

      <div className="space-y-4">
        <p className="text-xl text-muted-foreground font-display font-light">
          Currently at <a href="https://canals.ai" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Canals AI</a>, where I parse the unparseable and build tools that think. Away from the keyboard, you'll find me in the water.
        </p>
      </div>
    </div>
  )
} 