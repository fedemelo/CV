import Link from "next/link"
import { navigationItems } from "@/components/navigation/navigation-items"

interface NavigationCardProps {
  card: typeof navigationItems[0]
  isVisible: boolean
  animationStarted: boolean
}

export function NavigationCard({ card, isVisible, animationStarted }: NavigationCardProps) {
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
    >
      <div className="p-6 border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105">
        <h3 className="font-semibold mb-2 group-hover:text-primary font-display transition-colors">
          {card.label}
        </h3>
        <p className="text-sm text-muted-foreground transition-colors min-h-[2.5rem]">
          {card.description}
        </p>
      </div>
    </Link>
  )
} 