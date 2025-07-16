import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

interface GreenButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  asChild?: boolean
  tooltip?: string
}

export function GreenButton({ children, asChild, tooltip, ...props }: GreenButtonProps) {
  const button = (
    <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10" asChild={asChild} {...props}>
      {children}
    </Button>
  )

  if (tooltip) {
    return (
      <TooltipProvider delayDuration={0}>
        <Tooltip>
          <TooltipTrigger asChild>
            {button}
          </TooltipTrigger>
          <TooltipContent>
            <p>{tooltip}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return button
}