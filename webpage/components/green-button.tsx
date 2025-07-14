import { Button } from "@/components/ui/button"

export function GreenButton({ children, asChild, ...props }: { children: React.ReactNode, asChild?: boolean } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Button variant="outline" size="sm" className="hover:border-primary/90 hover:bg-primary/10" asChild={asChild} {...props}>
      {children}
    </Button>
  )
}