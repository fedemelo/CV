export function formatDate(dateInput: string | Date): string {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
    
    if (!isNaN(date.getTime())) 
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })

    console.warn('Invalid date provided to formatDate:', dateInput)
    return dateInput as string
    
  } catch (error) {
    console.error('Error formatting date:', error, dateInput)
    return dateInput as string
  }
}

export function formatShortDate(dateInput: string | Date): string {
  try {
    const date = typeof dateInput === 'string' ? new Date(dateInput) : dateInput
    if (!isNaN(date.getTime())) 
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
      })
      
    console.warn('Invalid date provided to formatShortDate:', dateInput)
    return dateInput as string
    
  } catch (error) {
    console.error('Error formatting short date:', error, dateInput)
    return dateInput as string
  }
} 