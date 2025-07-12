"use client"

import { DesktopNavigation, MobileNavigation, ThemeToggle } from "./navigation/index"

export function Navigation() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <DesktopNavigation />
          <MobileNavigation />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
