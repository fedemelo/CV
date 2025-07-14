import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { usePathname } from "next/navigation"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

interface NavigationCardProps {
  card: typeof navigationItems[0]
  isVisible: boolean
  animationStarted: boolean
}

export function NavigationCard({ card, isVisible, animationStarted }: NavigationCardProps) {
  const { setNavigatedInternally } = useNavigationAnimation()

  return (
    <Link 
      href={card.href} 
      className={`group block transition-all duration-700 ease-out ${
        animationStarted 
          ? isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-full opacity-0 pointer-events-none'
          : 'translate-y-full opacity-0'
      }`}
      style={{
        transform: animationStarted 
          ? isVisible 
            ? 'translateY(0)' 
            : 'translateY(100vh)'
          : 'translateY(100vh)'
      }}
      onClick={setNavigatedInternally}
    >
      <div className="relative p-6 border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
        <ArrowUpRight className="absolute top-4 right-4 h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        
        <h3 className="font-semibold mb-2 group-hover:text-primary font-display transition-colors pr-6">
          {card.label}
        </h3>
        <p className="text-sm text-muted-foreground transition-colors min-h-[2.5rem] leading-5">
          {card.description}
        </p>
      </div>
    </Link>
  )
} 