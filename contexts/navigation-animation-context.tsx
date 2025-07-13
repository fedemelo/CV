"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { usePathname } from 'next/navigation'

interface NavigationAnimationContextType {
  shouldShowNavigation: boolean
  setHomeAnimationComplete: () => void
  shouldRunNavBarAnimation: boolean
  setNavigatedInternally: () => void
}

const NavigationAnimationContext = createContext<NavigationAnimationContextType | undefined>(undefined)

export function NavigationAnimationProvider({ children }: { children: ReactNode }) {
  const [shouldShowNavigation, setShouldShowNavigation] = useState(false)
  const [shouldRunNavBarAnimation, setShouldRunNavBarAnimation] = useState(true)
  const [navigatedInternally, setNavigatedInternallyState] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const isHomePage = pathname === '/'
    
    if (isHomePage) {
      if (navigatedInternally) {
        setShouldShowNavigation(true)
        setShouldRunNavBarAnimation(false)
      } else {
        setShouldShowNavigation(false)
        setShouldRunNavBarAnimation(true)
      }
      setNavigatedInternallyState(false)
    } else {
      setShouldShowNavigation(true)
      setShouldRunNavBarAnimation(false)
    }
  }, [pathname])

  const setHomeAnimationComplete = () => {
    if (shouldRunNavBarAnimation) setShouldShowNavigation(true)
  }

  const setNavigatedInternally = () => {setNavigatedInternallyState(true)}

  return (
    <NavigationAnimationContext.Provider value={{ 
      shouldShowNavigation, 
      setHomeAnimationComplete, 
      shouldRunNavBarAnimation,
      setNavigatedInternally
    }}>
      {children}
    </NavigationAnimationContext.Provider>
  )
}

export function useNavigationAnimation() {
  const context = useContext(NavigationAnimationContext)
  if (context === undefined) throw new Error('useNavigationAnimation must be used within a NavigationAnimationProvider')
  return context
} 