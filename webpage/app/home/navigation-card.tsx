import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { isCurrentPath } from "@/utils/path"

interface NavigationCardProps {
  getTransform: () => string
  getZIndex: () => number
  navigationItem: typeof navigationItems[0]
}

export function NavigationCard({
  getTransform,
  getZIndex,
  navigationItem,
}: NavigationCardProps) {
  const { setNavigatedInternally } = useNavigationAnimation()
  const pathname = usePathname()
  const [tooltipOpen, setTooltipOpen] = useState(false)

  const styles = {
    transform: getTransform(),
    opacity: 1,
    zIndex: getZIndex()
  }

  const isCurrentTab = isCurrentPath(pathname, navigationItem.href)

  const handleClick = (e: React.MouseEvent) => {
    if (isCurrentTab) {
      e.preventDefault()
      setTooltipOpen(true)
      setTimeout(() => setTooltipOpen(false), 2000)
      return
    }
    setNavigatedInternally()
  }

  function renderCard() {
    return (
      <Link
        href={navigationItem.href}
        className="group block transition-all duration-700 ease-out pointer-events-auto"
        style={styles}
        onClick={handleClick}
      >
        <div className="relative p-6 border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background">
          <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground text-primary transition-colors" />

          <h3 className="font-semibold mb-2 group-hover:text-primary font-display transition-colors pr-6">
            {navigationItem.label}
          </h3>
          <p className="text-sm text-muted-foreground transition-colors min-h-[2.5rem] leading-5">
            {navigationItem.description}
          </p>
        </div>
      </Link>
    )
  }

  if (isCurrentTab) {
    return (
      <TooltipProvider>
        <Tooltip open={tooltipOpen} onOpenChange={setTooltipOpen}>
          <TooltipTrigger asChild>
            {renderCard()}
          </TooltipTrigger>
          <TooltipContent>
            <p>You are currently on the {navigationItem.label} tab</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return renderCard()
} 
