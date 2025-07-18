import { ExternalLink } from "lucide-react"
import { GreenButton } from "./green-button"
import { PORTFOLIO_URLS } from "../lib/constants"

export function OpenCVOrResume() {
  return (
    <div className="flex flex-row gap-4">
      <OpenTabButton url={PORTFOLIO_URLS.CV} name="CV" />
      <OpenTabButton url={PORTFOLIO_URLS.RESUME} name="Resume" />
    </div>
  )
}

function OpenTabButton({ url, name }: { url: string, name: string }) {
  const handleClick = () => {
    window.open(url, '_blank')
  }
  
  return (
    <GreenButton tooltip={`View my ${name} online`} onClick={handleClick}>
      <ExternalLink className="h-full w-full text-primary" />
      {name}
    </GreenButton>
  )
}