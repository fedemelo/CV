import { Calendar, MapPin, Building2 } from "lucide-react"
import type { Location } from "@/types"
import { formatDate } from "@/utils/date"

export function DisplayDateLocationOrganization({ date, location, organization }: { date?: string | Date | number, location?: Location, organization?: string }) {
  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      {date && <div className="flex items-center">
        <Calendar className="mr-1 h-4 w-4" />
        {typeof date === "number" ? date : formatDate(date)}
      </div>
      }
      {(location?.city || location?.state || location?.country) && <div className="flex items-center">
        <MapPin className="mr-1 h-4 w-4" />
        {location?.city && `${location.city}, `}
        {location?.state && `${location.state}, `}
        {location?.country && `${location.country}`}
      </div>
      }
      {organization && <div className="flex items-center">
        <Building2 className="mr-1 h-4 w-4" />
        {organization}
      </div>
      }
    </div>
  )
}