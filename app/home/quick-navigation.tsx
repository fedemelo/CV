"use client"

import { useState, useEffect } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { NavigationCard } from "./navigation-card"

export function QuickNavigation() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [animationStarted, setAnimationStarted] = useState(false)

  useEffect(() => {
    // Start animation after component mounts
    const startAnimation = () => {
      setAnimationStarted(true)
      
      navigationItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => [...prev, index])
        }, index * 1000) // 1s delay between each card
      })
    }

    // A small delay before the animation (also to ensure the hero section is visible)
    const timeoutId = setTimeout(startAnimation, 600)
    
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className="mt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {navigationItems.map((card, index) => (
          <NavigationCard
            key={card.href}
            card={card}
            isVisible={visibleCards.includes(index)}
            animationStarted={animationStarted}
          />
        ))}
      </div>
    </div>
  )
}
