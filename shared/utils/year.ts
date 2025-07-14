import { getPeriodFromDate } from './period';

export type YearRange = `${number} - ${number}` | `${number} - Present`;

export function getYearRange(
  startDate: Date | undefined,
   endDate?: Date, 
   isCurrent?: boolean
): `${number}` | YearRange {
  if (!startDate && !endDate)
    throw new Error("No dates provided");
  
  if (!startDate && endDate)
    return `${endDate.getFullYear()}`;

  if (!endDate && startDate)
    return isCurrent ? `${startDate.getFullYear()} - Present` : `${startDate.getFullYear()}`;

  if (startDate.getFullYear() === endDate.getFullYear())
    return `${startDate.getFullYear()}`;

  return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
}

export function getYearSequence(dates: Date[]): string {
  if (dates.length === 1) return getYearRange(dates[0]);

  const groupedByYear = Object.groupBy(dates, date => date.getFullYear());
  
  return Object.entries(groupedByYear)
    .sort(([a], [b]) => Number(a) - Number(b))
    .flatMap(([_, yearDates]) => {
      if (yearDates.length === 1) return [yearDates[0].getFullYear().toString()];
      
      // Multiple dates in same year - use sorted periods
      const periods = new Array(yearDates.length).fill(0).map((_, index) => getPeriodFromDate(yearDates[index]));
      const periodOrder = { Spring: 0, Summer: 1, Fall: 2 };
      return periods.sort((a, b) => {
        const [periodA] = a.split(' ');
        const [periodB] = b.split(' ');
        return periodOrder[periodA] - periodOrder[periodB];
      });
    })
    .join(", ");
}