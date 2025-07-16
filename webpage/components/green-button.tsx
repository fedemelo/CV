import { Button } from "@/components/ui/button"
import { useState } from "react"

interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
  tooltip?: string
}

export function GreenButton({ children, asChild, tooltip, ...props }: GreenButtonProps) {
  
  // Use custom tooltips because Shadcn's Tooltip component
  // shows on auto-focus when opening modals
  const [showTooltip, setShowTooltip] = useState(false)

  const button = (
    <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10" asChild={asChild} {...props}>
      {children}
    </Button>
  )

  if (tooltip) {
    return (
      <div 
        className="relative inline-block"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {button}
        {showTooltip && (
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1.5 text-sm text-popover-foreground bg-popover border border-border rounded-md shadow-md whitespace-nowrap z-50 animate-in fade-in-0 zoom-in-95">
            {tooltip}
          </div>
        )}
      </div>
    )
  }

  return button
}