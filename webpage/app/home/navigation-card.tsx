import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

type AnimationPhase = 'stacking' | 'dealing' | 'complete'

interface NavigationCardProps {
  gapPixels: number
  card: typeof navigationItems[0]
  cardIndex: number
  // Mobile props
  isVisible: boolean
  animationStarted: boolean
  // Desktop props (optional for mobile)
  isMobile: boolean
  animationPhase?: AnimationPhase
  isStacked?: boolean
  isDealt?: boolean
}

export function NavigationCard({ 
  gapPixels,
  card, 
  cardIndex, 
  isVisible, 
  animationStarted, 
  isMobile,
  animationPhase = 'complete',
  isStacked = false,
  isDealt = false,
}: NavigationCardProps) {
  const { setNavigatedInternally } = useNavigationAnimation()

  function getGridPosition(index: number) {
    const row = Math.floor(index / 3)
    const col = index % 3
    return { row, col }
  }

  function pokerDealingAnimation() {
    const { row: finalRow, col: finalCol } = getGridPosition(cardIndex)
    const stackPosition = getGridPosition(0)

    const translateToDealingPosition = `translate(${(stackPosition.col - finalCol) * 100}%,
    ${(stackPosition.row - finalRow) * 100}%)`
    
    // Gap adjustment: each card crosses different number of gaps
    const gapsToCloseX = stackPosition.col - finalCol  // negative means moving left
    const gapsToCloseY = stackPosition.row - finalRow  // negative means moving up
    const considerGap = `translate(${gapsToCloseX * gapPixels}px, ${gapsToCloseY * gapPixels}px)`

    switch (animationPhase) {
      case 'stacking':
        if (isStacked) {
          return `${translateToDealingPosition} ${considerGap}`
        } else {
          return 'translateY(100vh)'
        }
      case 'dealing':
        if (isDealt || cardIndex === 0) {
          return 'translate(0%, 0%)'
        } else if (isStacked) {
          return `${translateToDealingPosition} ${considerGap}`
        } else {
          return 'translateY(100vh)'
        }
      case 'complete':
        return 'translate(0%, 0%)'
      default:
        return 'translateY(100vh)'
    }
  }

  function getTransform() {
    if (!animationStarted) return 'translateY(100vh)'
    
    if (isMobile) return isVisible ? 'translateY(0)' : 'translateY(100vh)'
    
    return pokerDealingAnimation()
  }

  function getZIndex() {
    if (!isMobile) {
      switch (cardIndex) {
        case 0:
          return 100  // First card is on top
        default:
          return 100 - cardIndex  // Cards are stacked under the first card
      }
    }
      
    return 1
  }

  const styles = {
    transform: getTransform(),
    opacity: 1,
    zIndex: getZIndex()
  }

  return (
    <Link 
      href={card.href} 
      className="group block transition-all duration-700 ease-out pointer-events-auto"
      style={styles}
      onClick={setNavigatedInternally}
    >
      <div className="relative p-6 border rounded-lg hover:border-primary hover:shadow-lg transition-all duration-300 hover:scale-105 bg-background">
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