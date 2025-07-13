"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { navigationItems } from "./navigation-items"
import { useNavigationAnimation } from "@/contexts/navigation-animation-context"

export function DesktopNavigation() {
  const pathname = usePathname()
  const { setNavigatedInternally } = useNavigationAnimation()

  return (
    <div className="hidden md:flex items-center space-x-8">      
      <div className="flex items-center space-x-6">
        {navigationItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === item.href
                ? "text-primary"
                : "text-muted-foreground"
            }`}
            onClick={setNavigatedInternally}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  )
} 