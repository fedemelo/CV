"use client"

import { useState, useEffect, useRef } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { NavigationCard } from "./navigation-card"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"
import { sleep } from "@/utils/sleep"

type AnimationPhase = 'stacking' | 'dealing' | 'complete'

export function DesktopQuickNavigation() {
  const [animationStarted, setAnimationStarted] = useState(false)
  const [animationPhase, setAnimationPhase] = useState<AnimationPhase>('stacking')
  const [stackedCardsCount, setStackedCardsCount] = useState<number>(0)
  const [dealtCardsCount, setDealtCardsCount] = useState<number>(0)
  const { setHomeAnimationComplete } = useNavigationAnimation()
  const animationStartedRef = useRef(false)

  const INITIAL_DELAY = 600
  const PAUSE_BETWEEN_STACKING = 200
  const PAUSE_BETWEEN_DEALING = 750
  const PAUSE_BETWEEN_STACKING_AND_DEALING = 500
  const PAUSE_BEFORE_END_ANIMATION = 300

  function stackAllCards(pauseBetweenStacking: number): Promise<void> {
    return new Promise((resolve) => {
      navigationItems.forEach((_card, index) => {
        setTimeout(() => {
          setStackedCardsCount(prev => prev + 1)

          const lastCardIsStacked = index === navigationItems.length - 1
          if (lastCardIsStacked) resolve()
        }, index * pauseBetweenStacking)
      })
    })
  }

  function dealAllCards(pauseBetweenDealing: number): Promise<void> {
    return new Promise((resolve) => {
      const dealingOrder = [...navigationItems].reverse()
      
      dealingOrder.forEach((_card, index) => {
        setTimeout(() => {
          setDealtCardsCount(prev => prev + 1)
          
          const lastCardIsDealt = index === dealingOrder.length - 1
          if (lastCardIsDealt) resolve()
        }, index * pauseBetweenDealing)
      })
    })
  }

  async function runAnimation() {
    await sleep(INITIAL_DELAY)
    
    animationStartedRef.current = true
    setAnimationStarted(true)
    setAnimationPhase('stacking')
    
    await stackAllCards(PAUSE_BETWEEN_STACKING)
    
    await sleep(PAUSE_BETWEEN_STACKING_AND_DEALING)
    
    setAnimationPhase('dealing')
    await dealAllCards(PAUSE_BETWEEN_DEALING)
    
    await sleep(PAUSE_BEFORE_END_ANIMATION)
    
    setAnimationPhase('complete')
    setHomeAnimationComplete()
  }

  useEffect(() => {
    if (!animationStartedRef.current) runAnimation()
  }, [setHomeAnimationComplete])

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navigationItems.map((card, index) => (
          <NavigationCard
            key={card.href}
            card={card}
            cardIndex={index}
            isVisible={true}
            animationStarted={animationStarted}
            isMobile={false}
            animationPhase={animationPhase}
            isStacked={stackedCardsCount > index}
            isDealt={dealtCardsCount > index}
          />
        ))}
      </div>
    </div>
  )
} 