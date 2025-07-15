"use client"

import { useState, useEffect, useRef } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { NavigationCard } from "./navigation-card"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

export function MobileQuickNavigation() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [animationStarted, setAnimationStarted] = useState(false)
  const { setHomeAnimationComplete } = useNavigationAnimation()
  const animationStartedRef = useRef(false)

  const INITIAL_DELAY = 600
  const PAUSE_BETWEEN_VISIBLE_CARDS = 750
  const PAUSE_BEFORE_END_ANIMATION = 1000

  useEffect(() => {
    if (animationStartedRef.current) return

    const startAnimation = () => {
      animationStartedRef.current = true
      setAnimationStarted(true)
      
      navigationItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => {
            const newVisibleCards = [...prev, index]
            return newVisibleCards
          })
          
          if (index === navigationItems.length - 1) {
            setTimeout(() => {
              setHomeAnimationComplete()
            }, PAUSE_BEFORE_END_ANIMATION)
          }
        }, index * PAUSE_BETWEEN_VISIBLE_CARDS)
      })
    }

    const timeoutId = setTimeout(startAnimation, INITIAL_DELAY)
    return () => clearTimeout(timeoutId)
  }, [setHomeAnimationComplete])

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navigationItems.map((card, index) => (
          <NavigationCard
            key={card.href}
            card={card}
            cardIndex={index}
            isVisible={visibleCards.includes(index)}
            animationStarted={animationStarted}
            isMobile={true}
          />
        ))}
      </div>
    </div>
  )
} 