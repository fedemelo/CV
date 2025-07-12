export function NoItemsAvailable({ itemName }: { itemName: string }) {
  return (
    <div className="text-center py-8">
      <p className="text-muted-foreground">No {itemName} available at the moment.</p>
    </div>
  )
}