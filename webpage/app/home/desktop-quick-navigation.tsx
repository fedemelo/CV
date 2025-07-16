"use client"

import { useState, useEffect, useRef } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { NavigationCard } from "./navigation-card"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { sleep } from "@/utils/sleep"

type AnimationPhase = 'stacking' | 'dealing' | 'complete'

export function DesktopQuickNavigation() {
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('stacking')
  const [stackedCardsBitmask, setStackedCardsBitmask] = useState<number>(0)
  const [dealtCardsBitmask, setDealtCardsBitmask] = useState<number>(0)
  const { setHomeAnimationComplete } = useNavigationAnimation()
  const animationStartedRef = useRef(false)

  const INITIAL_DELAY = 500
  const PAUSE_BETWEEN_STACKING = 100
  const PAUSE_BETWEEN_STACKING_AND_DEALING = 1000
  const PAUSE_BETWEEN_DEALING = 500

  const CARDS_PER_ROW = 3

  // Equivalent to Tailwind's gap-4 (rem)
  // Using the amount of pixels so that the gap's offset is consistent
  // and can be considered on the stacking animation.
  const GAP_PIXELS = 16
  const NUMBER_OF_CARDS = 6

  async function runAnimation() {
    // Guard clause to warn developers when changing the number of cards
    if (navigationItems.length !== NUMBER_OF_CARDS) 
      throw new Error(`DesktopQuickNavigation only supports ${NUMBER_OF_CARDS} cards`)

    await sleep(INITIAL_DELAY)
    
    animationStartedRef.current = true
    setAnimationPhase('stacking')
    
    await stackAllCards(PAUSE_BETWEEN_STACKING)
    
    await sleep(PAUSE_BETWEEN_STACKING_AND_DEALING)
    
    setAnimationPhase('dealing')
    await dealAllCards(PAUSE_BETWEEN_DEALING)
    
    setAnimationPhase('complete')
    setHomeAnimationComplete()
  }

  /**
   * Goes through the cards in order, updating a bitmask
   * The bitmask is used to track the progress of some process
   * Resolves when all cards' bitmask is set
   */
  function trackCardProgressWithIntervals(
    delayBetweenOperations: number,
    setBitmask: React.Dispatch<React.SetStateAction<number>>,
    operationOrder?: number[]
  ): Promise<void> {
    return new Promise((resolve) => {
      navigationItems.forEach((_card, index) => {
        const cardIndex = operationOrder?.at(index) ?? index
        setTimeout(() => {
          setBitmask(prev => prev | (1 << cardIndex))
          
          const lastCardIsProcessed = index === navigationItems.length - 1
          if (lastCardIsProcessed) resolve()
        }, index * delayBetweenOperations)
      })
    })
  }

  function stackAllCards(pauseBetweenStacking: number): Promise<void> {
    return trackCardProgressWithIntervals(
      pauseBetweenStacking,
      setStackedCardsBitmask
    )
  }

  function dealAllCards(pauseBetweenDealing: number): Promise<void> {
    // Clockwise order for 6 elements
    const dealingOrder = navigationItems.length === NUMBER_OF_CARDS ? [2, 5, 4, 3, 0, 1] : undefined
    
    return trackCardProgressWithIntervals(
      pauseBetweenDealing,
      setDealtCardsBitmask,
      dealingOrder
    )
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
    const gapsToCloseX = stackPosition.col - finalCol  // Adjust gap offset to the left
    const gapsToCloseY = stackPosition.row - finalRow  //    "    "    "    upwards
    const considerGap = `translate(${gapsToCloseX * GAP_PIXELS}px, ${gapsToCloseY * GAP_PIXELS}px)`

    const isStacked = (stackedCardsBitmask & (1 << cardIndex)) !== 0
    const isDealt = (dealtCardsBitmask & (1 << cardIndex)) !== 0

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
    if (cardIndex === 0) return 10  // First card is on top
    return 10 - cardIndex  // Cards are stacked under the first card
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