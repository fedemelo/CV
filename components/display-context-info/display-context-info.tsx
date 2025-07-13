import { Calendar, MapPin, Building2, Users } from "lucide-react"
import type { Location } from "@/types"
import { formatDate } from "@/utils/date"

export function DisplayContextInfo({
  date, startDate, endDate, location, organization, team,
}: {
  date?: string | Date | number
  startDate?: string | Date | number
  endDate?: string | Date | number
  location?: Location
  organization?: string
  team?: string
}) {

  if (startDate && endDate && date)
    throw new Error("Cannot have both startDate and endDate and date")

  if (endDate && !startDate)
    throw new Error("endDate must have a startDate")

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      {date && <SingleDateDisplay date={date} />}
      {startDate && <DateRangeDisplay startDate={startDate} endDate={endDate} />}

      {location && <LocationDisplay location={location} />}

      {organization && <OrganizationDisplay organization={organization} />}

      {team && <TeamDisplay team={team} />}
    </div>
  )
}


function SingleDateDisplay({ date }: { date: string | Date | number }) {
  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {typeof date === "number" ? date : formatDate(date)}
    </div>
  )
}

function DateRangeDisplay({ startDate, endDate }: { startDate: string | Date | number, endDate?: string | Date | number }) {
  return (
    <div className="flex items-center">
      <Calendar className="mr-1 h-4 w-4" />
      {typeof startDate === "number" ? startDate : formatDate(startDate)}
      {endDate ? ` - ${typeof endDate === "number" ? endDate : formatDate(endDate)}` : " - Present"}
    </div>
  )
}

function LocationDisplay({ location }: { location: Location }) {
  return (
    <div className="flex items-center">
      <MapPin className="mr-1 h-4 w-4" />
      {location.city && `${location.city}, `}
      {location.state && `${location.state}, `}
      {location.country && `${location.country}`}
    </div>
  )
}

function OrganizationDisplay({ organization }: { organization: string }) {
  return (
    <div className="flex items-center">
      <Building2 className="mr-1 h-4 w-4" />
      {organization}
    </div>
  )
}

function TeamDisplay({ team }: { team: string }) {
  return (
    <div className="flex items-center">
      <Users className="mr-1 h-4 w-4" />
      {team}
    </div>
  )
}