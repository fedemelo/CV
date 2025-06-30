export type YearRange = `${number} - ${number}`;

export function getYearRange(startDate: Date | undefined, endDate: Date | undefined): `${number}` | YearRange {
  if (!startDate && !endDate)
    throw new Error("No dates provided");
  
  if (!startDate)
    return `${endDate.getFullYear()}`;

  if (!endDate)
    return `${startDate.getFullYear()}`;

  if (startDate.getFullYear() === endDate.getFullYear())
    return `${startDate.getFullYear()}`;

  return `${startDate.getFullYear()} - ${endDate.getFullYear()}`;
}