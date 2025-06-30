export type Period = `${'Summer' | 'Fall' | 'Spring'} ${number}`

export function getPeriodFromDate(date: Date): Period {
  const month = date.getMonth();
  const year = date.getFullYear();
  const period = month < 6 ? 'Spring' : month < 9 ? 'Summer' : 'Fall';
  return `${period} ${year}`;
}

export function getPeriodFromDates(startDate: Date, endDate: Date): Period | `${Period} - ${Period}` {
  if (startDate.getFullYear() !== endDate.getFullYear())
    return `${getPeriodFromDate(startDate)} - ${getPeriodFromDate(endDate)}`;
  
  const dateMidPoint = new Date(startDate.getFullYear(), Math.round((startDate.getMonth() + endDate.getMonth()) / 2), 1);
  return getPeriodFromDate(dateMidPoint);
}