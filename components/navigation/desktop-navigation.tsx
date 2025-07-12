import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navigationItems } from "./navigation-items"

export function DesktopNavigation() {
  const pathname = usePathname()

  return (
    <div className="hidden md:flex items-center space-x-6">
      {navigationItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary border-b-2 border-primary pb-1" : "text-muted-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}
    </div>
  )
} 