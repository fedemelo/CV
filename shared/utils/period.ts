export type Period = `${'Summer' | 'Fall' | 'Spring'} ${number}`

export function getPeriodFromDate(date: Date): Period {
  const month = date.getMonth();
  const year = date.getFullYear();
  // 0-indexed months
  const period = month < 6 ? 'Spring' : month < 7 ? 'Summer' : 'Fall';
  return `${period} ${year}`;
}

export function getPeriodFromDates(startDate: Date, endDate: Date, isCurrent: boolean): Period | `${Period} - ${Period}` {
  if (isCurrent)
    return getPeriodFromDate(startDate);

  if (startDate.getFullYear() !== endDate.getFullYear())
    return `${getPeriodFromDate(startDate)} - ${getPeriodFromDate(endDate)}`;
  
  const dateMidPoint = new Date(startDate.getFullYear(), Math.round((startDate.getMonth() + endDate.getMonth()) / 2), 1);
  return getPeriodFromDate(dateMidPoint);
}