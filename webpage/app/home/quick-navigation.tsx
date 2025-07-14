"use client"

import { useState, useEffect } from "react"
import { navigationItems } from "@/components/navigation/navigation-items"
import { NavigationCard } from "./navigation-card"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

export function QuickNavigation() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const [animationStarted, setAnimationStarted] = useState(false)
  const { setHomeAnimationComplete } = useNavigationAnimation()

  useEffect(() => {
    // Start animation after component mounts
    const startAnimation = () => {
      setAnimationStarted(true)
      
      navigationItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleCards(prev => {
            const newVisibleCards = [...prev, index]
            console.log(`Card ${index + 1} visible, total visible: ${newVisibleCards.length}`)
            return newVisibleCards
          })
          
          // If this is the last card, notify that animation is complete
          if (index === navigationItems.length - 1) {
            setTimeout(() => {
              console.log('All navigation cards animated, notifying completion...')
              setHomeAnimationComplete()
            }, 1000) // Notification sent 1s after last card animation starts
          }
        }, index * 750) // 1s delay between each card
      })
    }

    // A small delay before the animation (also to ensure the hero section is visible)
    const timeoutId = setTimeout(startAnimation, 600)
    
    return () => clearTimeout(timeoutId)
  }, [setHomeAnimationComplete])

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
