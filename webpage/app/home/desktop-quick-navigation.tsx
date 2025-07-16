"use client"

import { useState, useEffect, useRef } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { NavigationCard } from "./navigation-card"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { sleep } from "@/utils/sleep"

type AnimationPhase = 'stacking' | 'dealing' | 'complete'

export function DesktopQuickNavigation() {
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('stacking')
  const [stackedCardsCount, setStackedCardsCount] = useState<number>(0)
  const [dealtCardsCount, setDealtCardsCount] = useState<number>(0)
  const { setHomeAnimationComplete } = useNavigationAnimation()
  const animationStartedRef = useRef(false)

  const INITIAL_DELAY = 300
  const PAUSE_BETWEEN_STACKING = 100
  const PAUSE_BETWEEN_STACKING_AND_DEALING = 900
  const PAUSE_BETWEEN_DEALING = 500
  const PAUSE_BEFORE_END_ANIMATION = 300

  const CARDS_PER_ROW = 3

  // Equivalent to Tailwind's gap-4 (rem)
  // Using the amount of pixels so that the gap's offset is consistent
  // and can be considered on the stacking animation.
  const GAP_PIXELS = 16

  async function runAnimation() {
    await sleep(INITIAL_DELAY)
    
    animationStartedRef.current = true
    setAnimationPhase('stacking')
    
    await stackAllCards(PAUSE_BETWEEN_STACKING)
    
    await sleep(PAUSE_BETWEEN_STACKING_AND_DEALING)
    
    setAnimationPhase('dealing')
    await dealAllCards(PAUSE_BETWEEN_DEALING)
    
    await sleep(PAUSE_BEFORE_END_ANIMATION)
    
    setAnimationPhase('complete')
    setHomeAnimationComplete()
  }

  function stackAllCards(pauseBetweenStacking: number): Promise<void> {
    return new Promise((resolve) => {
      navigationItems.forEach((_card, index) => {
        setTimeout(() => {
          setStackedCardsCount(prev => prev | (1 << index))  // Use bitmask to track specific cards

          const lastCardIsStacked = index === navigationItems.length - 1
          if (lastCardIsStacked) resolve()
        }, index * pauseBetweenStacking)
      })
    })
  }

  function dealAllCards(pauseBetweenDealing: number): Promise<void> {
    return new Promise((resolve) => {


      const dealingOrder = navigationItems.length === 6 ? [
        2, 5, 4, 3, 0, 1  // Clockwise order for 6 elements
      ] : []
      
      navigationItems.forEach((_card, index) => {
        const cardIndex = dealingOrder?.at(index) ?? index
        setTimeout(() => {
          setDealtCardsCount(prev => prev | (1 << cardIndex))
          
          const lastCardIsDealt = index === navigationItems.length - 1
          if (lastCardIsDealt) resolve()
        }, index * pauseBetweenDealing)
      })
    })
  }

  function getGridPosition(index: number) {
    const row = Math.floor(index / CARDS_PER_ROW)
    const col = index % CARDS_PER_ROW
    return { row, col }
  }

  function getStackPosition() {
    // Center position of the top row
    const centerCol = Math.floor(CARDS_PER_ROW / 2)
    return { row: 0, col: centerCol }
  }

  function pokerDealingAnimation(cardIndex: number) {
    const { row: finalRow, col: finalCol } = getGridPosition(cardIndex)
    const stackPosition = getStackPosition()

    const translateToDealingPosition = `translate(${(stackPosition.col - finalCol) * 100}%,
    ${(stackPosition.row - finalRow) * 100}%)`
    
    // Gap adjustment: each card crosses different number of gaps
    const gapsToCloseX = stackPosition.col - finalCol  // Move left
    const gapsToCloseY = stackPosition.row - finalRow  // Move up
    const considerGap = `translate(${gapsToCloseX * GAP_PIXELS}px, ${gapsToCloseY * GAP_PIXELS}px)`

    const isStacked = (stackedCardsCount & (1 << cardIndex)) !== 0
    const isDealt = (dealtCardsCount & (1 << cardIndex)) !== 0

    switch (animationPhase) {
      case 'stacking':
        return isStacked ? `${translateToDealingPosition} ${considerGap}` : 'translateY(100vh)'
      case 'dealing':
        if (isDealt || cardIndex === stackPosition.row * CARDS_PER_ROW + stackPosition.col) return 'translate(0%, 0%)'
        return isStacked ? `${translateToDealingPosition} ${considerGap}` : 'translateY(100vh)'
      case 'complete':
        return 'translate(0%, 0%)'
      default:
        return 'translateY(100vh)'
    }
  }

  function getZIndex(cardIndex: number) {
    if (cardIndex === 0) return 100  // First card is on top
    return 100 - cardIndex  // Cards are stacked under the first card
  }

  useEffect(() => {
    if (!animationStartedRef.current) runAnimation()
  }, [setHomeAnimationComplete])

  return (
    <div className="mt-12">
      <div 
        className={`grid grid-cols-1 lg:grid-cols-${CARDS_PER_ROW}`} 
        style={{ gap: `${GAP_PIXELS}px` }}
      >
        {navigationItems.map((card, index) => (
          <NavigationCard
            key={card.href}
            navigationItem={card}
            getTransform={() => pokerDealingAnimation(index)}
            getZIndex={() => getZIndex(index)}
          />
        ))}
      </div>
    </div>
  )
} 